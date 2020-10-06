import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt=""
      />

      <img
        className="nav_avatar"
        src="https://learning.royalbcmuseum.bc.ca/wp-content/uploads/2014/07/netflix-face.jpg"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;
