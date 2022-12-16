import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppContextProvider } from "../contexts/AppContext";
import { Compose } from "../utils/Compose";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Compose components={[AppContextProvider]}>
      <Component {...pageProps} />
    </Compose>
  );
}
