import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-info" style={{ height: "150vh" }}>
      <Navbar />
      <div className="gap-2 bg-white rounded-3 p-2 m-4 hstack border border-2">
        <img
          src="/me.jpg"
          width="200px"
          height="200px"
          style={{ objectFit: "cover" }}
          className="rounded-circle"
        />
        <div>
          <p className="fw-bold">Chonlanan Thongthai</p>
          <p className="text-secondary">
            Hi, my name is Chonlanan. I'm a second year student at Chiangmai
            University. I study in Faculty of Engineering. I love playing
            computer game and watching movie. I'm interested in programming and
            website development
          </p>
        </div>
      </div>
      <hr className="my-0" />
      <p style={{ textAlign: "center" }} className="fw-bold h5 mt-2">
        My Hobbies
      </p>
      <div class="gap-2 bg-white rounded-3 p-2 m-4 border border-2 d-flex">
        <img
          src="/Game.jpg"
          width="150px"
          height="150px"
          style={{ objectFit: "cover" }}
          className="rounded-2"
        />
        <div>
          <p className="fw-bold">Playing computer games</p>
          <p className="text-secondary">
            I love playing computer games. I always play them everyday!!
          </p>
        </div>
      </div>
      <div className="gap-2 bg-white rounded-3 p-2 m-4 border border-2 d-flex">
        <img
          src="/netflix.jpg"
          width="150px"
          height="150px"
          style={{ objectFit: "cover" }}
          className="rounded-2"
        />
        <div>
          <p className="fw-bold">Watching movie</p>
          <p className="text-secondary">
            I really like watching movie. I watch it once a day.
          </p>
        </div>
      </div>

      <div className="gap-2 bg-white rounded-3 p-2 m-4 border border-2 d-flex">
        <img
          src="/music.jpg"
          width="150px"
          height="150px"
          style={{ objectFit: "cover" }}
          className="rounded-2"
        />
        <div>
          <p className="fw-bold">Listening to music</p>
          <p className="text-secondary">
            Another thing that I like to do is listening to music. I feel very
            relax when listen to it.
          </p>
        </div>
      </div>
    </div>
  );
}
