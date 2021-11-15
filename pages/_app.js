import "tailwindcss/tailwind.css";
import Head from "next/head";
import {
  MantineProvider,
  NormalizeCSS,
  GlobalStyles,
  useStylesCleanup,
  SsrProvider,
} from "@mantine/core";
import Navbar from "../components/Navbar";

export default function App(props) {
  const { Component, pageProps } = props;

  useStylesCleanup();

  return (
    <>
      <SsrProvider>
        <Head>
          <title>Hotel Pride</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />{" "}
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <MantineProvider
          theme={{
            /* Put your mantine theme override here */
            colorScheme: "light",
          }}
        >
          {/* NormalizeCSS and GlobalStyles are optional */}
          <NormalizeCSS />
          <GlobalStyles />
          <Navbar />
          <Component {...pageProps} />
        </MantineProvider>
      </SsrProvider>
    </>
  );
}
