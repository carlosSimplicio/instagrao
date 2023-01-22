import type { AppProps } from "next/app";
import { UserStorage } from "@/utils/UserContext";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserStorage>
      <Component {...pageProps} />
    </UserStorage>
  );
}
