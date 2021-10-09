import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hotel Pride</title>
        {/* <meta tag="description">This is the site of Hotel Pride</meta> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>
    </div>
  );
}
