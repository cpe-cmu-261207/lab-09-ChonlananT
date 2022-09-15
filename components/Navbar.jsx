import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-opacity-25 bg-light">
      <div
        className="d-flex mx-auto align-items-center"
        style={{ maxWidth: "800px" }}
      >
        <span className="me-auto h3 fw-bold">My Resume</span>
        <div className="hstack gap-4">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/experience">
            <a>Experience</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/lab-07">
            <a>Lab-07</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
