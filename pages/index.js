import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>

      {/* header */}
      <Header />
      {/* Navbar */}
      <Navbar />
      {/* Results */}
    </div>
  );
}
