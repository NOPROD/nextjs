import "../styles/sass/main.scss";
import "../styles/sass/style.scss";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
