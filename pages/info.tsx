import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Info: NextPage = () => {
  return (
    <div className="bg-red-400">
      <h1>yaaa Infopage</h1>
      <Link href="/">home</Link>
    </div>
  );
};

export default Info;
