import { ajax } from "@/utils/ajax";
import { MockResponse } from "@/utils/mock";
import React from "react";

type MakeRequest = (
  url: string,
  options?: RequestInit
) => Promise<{
  response: Response | MockResponse | undefined;
  json: any;
}>;

const useFetch = (): [object | any, boolean, string, MakeRequest] => {
  const [data, setData] = React.useState<null | object>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState("");

  const makeRequest: MakeRequest = async (
    url: string,
    options?: RequestInit
  ) => {
    let response, json;
    try {
      setLoading(true);
      setError("");
      setData(null);
      response = await ajax(url, options);
      json = await response.json();
      if (!response.ok) throw new Error(json.message);
    } catch (err: any) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  };

  return [data, loading, error, makeRequest];
};

export default useFetch;
