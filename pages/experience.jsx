import React from "react";
import Navbar from "../components/Navbar";

export default function experience() {
  return (
    <div className="bg-info" style={{ height: "100vh" }}>
      <Navbar />
      <p className="fw-bold h4 mt-2" style={{ textAlign: "center" }}>
        Project Experience
      </p>
      <div className="gap-2 bg-white rounded-3 p-2 m-4 border border-2 d-flex">
        <img
          src="/project1.jpg"
          width="150px"
          height="150px"
          // style="object-fit: cover"
          className="rounded-2"
        />
        <div>
          <p className="fw-bold">Blue Boy and Red Women</p>
          <p className="text-secondary">
            This is my first year project. This game is adventure co-op game and
            it made from Scratch. It is very fun to play with friends.
          </p>
        </div>
      </div>
      <div className="gap-2 bg-white rounded-3 p-2 m-4 border border-2 d-flex">
        <img
          src="/project2.jpg"
          width="150px"
          height="150px"
          // style={{object-fit: "cover"}}
          className="rounded-2"
        />
        <div>
          <p className="fw-bold">Text-based MMORPG game</p>
          <p className="text-secondary">
            This is also my first year project. It's code by C++ and it's really
            fun to play if you are gamer that like text-based MMORPG games.
          </p>
        </div>
      </div>
    </div>
  );
}
