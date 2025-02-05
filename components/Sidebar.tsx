import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/profile">Profile</Link></li>
      </ul>
    </div>
  );
}

