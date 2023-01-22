const buildForm = (data: object) => {
  const formData = new FormData();
  for (let key of Object.keys(data)) {
    const k = key as keyof typeof data;
    formData.append(key, data[k]);
  }
  return formData;
};

export const buildUserLogin = (username: string, password: string) => {
  return {
    url: "/api/login",
    options: {
      method: "POST",
      body: buildForm({ username, password }),
    },
  };
};
