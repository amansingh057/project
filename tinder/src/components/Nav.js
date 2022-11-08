import React from "react";
import logo from "../images/tinder_logo_white.png";
import colorLogo from "../images/color-logo-tinder.png";
const Nav = ({ minimal, authToken, setshowModal,showModal }) => {
  // const minimal = true
  function handleClick() {
    setshowModal(true);
  }
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : logo} />
      </div>
      {!authToken && !minimal && (
        <button className="nav-button" onClick={handleClick} disabled={showModal}>
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
