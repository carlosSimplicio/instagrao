import { mock, MockResponse } from "./mock";

export const ajax = async (
  url: string,
  options?: RequestInit
): Promise<Response | MockResponse> => {
  if (process.env.API_MOCK === "1") {
    let response = await fetch(url, options);
    return response;
  }
  if (Object.keys(mock).includes(url)) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mock[url]);
      }, 2000);
    });
  }
  throw new Error("Url inválida");
};
