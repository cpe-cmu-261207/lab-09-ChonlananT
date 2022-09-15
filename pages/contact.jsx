import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function contact() {
  return (
    <div className="bg-info" style={{ height: "100vh" }}>
      <Navbar />
      <p className="fw-bold h2 mt-2" style={{ textAlign: "center" }}>
        Contact Me
      </p>
      <div
        className="gap-2 bg-white rounded-3 mx-auto border border-2 d-flex"
        style={{ maxWidth: "1000px" }}
      >
        <img
          src="/me2.jpg"
          width="200px"
          height="200px"
          style={{ objectFit: "cover" }}
          className="rounded-circle m-4"
        />
        <div className="vstack ms-3">
          <span className="fw-bold">Name</span>
          <span className="text-secondary ms-3"> Chonlanan Thongthai </span>
          <br />
          <span className="fw-bold">Nickname</span>
          <span className="text-secondary ms-3"> Wan </span>
          <br />
          <span className="fw-bold">Address</span>
          <span className="text-secondary ms-3">
            4/5 หมู่ 9 ตำบลป่าแดด อำเภอเมือง จังหวัดเชียงใหม่
          </span>
          <br />
          <span className="fw-bold">Facebook</span>
          <Link href="https://www.facebook.com/chonlanan.thongthai/">
            <a rel="noreferrer" target="_blank">
              <span className="text-secondary ms-3">
                https://www.facebook.com/chonlanan.thongthai/
              </span>
            </a>
          </Link>
          <br />
          <span className="fw-bold">Email</span>
          <Link href="mailto:chonlanan_t@cmu.ac.th">
            <a>
              <span className="text-secondary ms-3">
                {" "}
                chonlanan_t@cmu.ac.th{" "}
              </span>
            </a>
          </Link>
          <br />
          <span className="fw-bold">Phone</span>
          <span className="text-secondary ms-3"> 086-670-9923 </span>
          <br />
        </div>
      </div>
    </div>
  );
}
