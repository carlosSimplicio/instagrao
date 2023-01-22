import React from "react";
import { UserContext } from "@/utils/UserContext";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { userLoggedIn } = React.useContext(UserContext);
  const router = useRouter();

  React.useEffect(() => {
    const isLogged = userLoggedIn();
    console.log("protecting");
    if (!isLogged) router.push("/login");
  });

  return <>{children}</>;
};

export default ProtectedRoute;
