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
          user: "Joãozinho",
          id: 1,
          session: "aisjdiasjd932420387429hdasjkdasd",
          message: "",
        });
      });
    },
    ok: true,
  },
};
