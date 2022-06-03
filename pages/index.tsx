import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-red-400">
      <h1>yaaa homepage</h1>
      <Link href="/info">info page</Link>
    </div>
  );
};

export default Home;
