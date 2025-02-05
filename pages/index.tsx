import Head from "next/head";
import Dashboard from "../components/Dashboard";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project Management Dashboard</title>
        <meta name="description" content="Project Management Dashboard" />
      </Head>
      <Dashboard />
    </div>
  );
}
