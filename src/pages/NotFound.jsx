import React from "react";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";

function NotFound() {
  return (
    <div className="notfound__container">
      <Link to={"/"}>
        <button className="btn btn_home">
          Home page <IoMdExit />
        </button>
      </Link>

      <video
        autoPlay
        loop
        muted
        playsInline
        src="/videos/404error.mp4"
        className="background__video"
      ></video>
    </div>
  );
}

export default NotFound;
