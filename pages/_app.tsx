import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  <Head>
    <title>Covert RGB TO HSL OR Covert HSL TO RGB </title>
    <meta name="title" content="Covert RGB TO HSL OR Covert HSL TO RGB "></meta>
    <meta
      name="description"
      content="Covert RGB TO HSL OR Covert HSL TO RGB "
    ></meta>
  </Head>;
  return <Component {...pageProps} />;
}
