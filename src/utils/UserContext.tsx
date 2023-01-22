import React from "react";
import { ajax } from "./ajax";
import { buildUserLogin } from "./BuildRequest";

interface UserData {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_pic: string;
  session: string;
  expireDate: Date;
}

interface UserContextProps {
  user: UserData;
  loading: boolean;
  userLoggedIn: () => boolean;
  logUser: (
    username: string,
    password: string
  ) => Promise<UserData | undefined>;
}

const baseUserData: UserData = {
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  profile_pic: "",
  session: "",
  expireDate: new Date(1900, 1, 1),
};

const isUserData = (data: any): data is UserData => {
  if (!data) return false;

  const udata = data as UserData;
  return data && udata.session && udata.session;
};

export const UserContext = React.createContext<UserContextProps>(
  {} as UserContextProps
);

export const UserStorage = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<UserData>({ ...baseUserData });
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function logUser(username: string, password: string) {
    try {
      setLoading(true);
      const { url, options } = buildUserLogin(username, password);
      const response = await ajax(url, options);
      if (response.ok) {
        const json = await response.json();
        if (isUserData(json)) {
          const userData = { ...json, expireDate: new Date(json.expireDate) };
          setUser(userData);
          setSessionCookie(userData);
          return userData;
        }
      }
    } catch {
    } finally {
      setLoading(false);
    }
  }

  const setSessionCookie = (data: UserData) => {
    document.cookie = `session=${
      data.session
    }; expires=${data.expireDate.toUTCString()}`;
  };

  const userLoggedIn = () => {
    const sessionCookie = document.cookie
      .split(";")
      .find((cookie) => cookie.startsWith("session="));
    const sessionToken = sessionCookie?.split("=")[1];
    if (!sessionToken) {
      if (user.session) setUser({ ...baseUserData });
      return false;
    }
    return true;
  };

  return (
    <UserContext.Provider value={{ user, loading, userLoggedIn, logUser }}>
      {children}
    </UserContext.Provider>
  );
};
