export type MockResponse = {
  json: () => Promise<{
    [key: string]: any;
  }>;
  ok: boolean;
};
interface Mock {
  [key: string]: MockResponse;
}

export let mock: Mock = {
  "/api/login": {
    json: () => {
      return new Promise((resolve) => {
        resolve({
          id: 1,
          username: "joazinho",
          first_name: "Joao",
          last_name: "da Silva",
          profile_pic: "",
          session: "aisjdiasjd932420387429hdasjkdasd",
          expireDate: new Date(new Date().getTime() + 25 * 60000).toString(),
          message: "",
        });
      });
    },
    ok: true,
  },
};
