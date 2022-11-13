import React from "react";
import logo from "../images/tinder_logo_white.png";
import colorLogo from "../images/color-logo-tinder.png";
const Nav = ({ minimal, setshowModal,showModal,setIsSignup }) => {
  // const minimal = true
  function handleClick() {
    setshowModal(true);
    setIsSignup(false)
  }
  const authToken = false
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

