import React, { useState } from "react";
import "./Header.css";
import { IoMenu } from "react-icons/io5";

export const Header = () => {
  const [open, setopen] = useState(false);

  const handleopen = () => {
    if (!open) {
      document.getElementById("sidebar").style.width = "50%";
      setopen(true);
    } else {
      document.getElementById("sidebar").style.width = "0%";
      setopen(false);
    }
  };

  return (
    <>
      <div className="barnav">
        <div className="leftname">
          <a>To-Do List</a>
        </div>

        <div className="rightNav">
          <div className="hidden">
            <a>Home</a>
          </div>
          <div className="hidden">
            <a>About</a>
          </div>
          <div className="hidden">
            <a>Login</a>
          </div>
          <div className="icon" onClick={handleopen}>
            <IoMenu />
          </div>
        </div>
      </div>
      <div>
        <div className="sideNav" id="sidebar">
          <div className="sidetab">
            <a>Home</a>
          </div>
          <div className="sidetab">
            <a>About</a>
          </div>
          <div className="sidetab">
            <a>Login</a>
          </div>
        </div>
      </div>
    </>
  );
};
