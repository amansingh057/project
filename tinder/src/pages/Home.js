import React, { useState } from "react";
import Authmodal from "../components/Authmodal";
import Nav from "../components/Nav";

const Home = () => {
  const [showModal, setshowModal] = useState(false);
  const [isSignUp,setIsSignup] = useState(true)
  const authToken = false;
  function handleClick() {
    console.log("Clicked");
    setshowModal(true);
  }
  return (
    <div className="overlay">
      <Nav
        minimal={false}
        setshowModal={setshowModal}
        showModal={showModal}
        setIsSignup={setIsSignup}
      />
      <div className="home">
        <h1 className="primary-title">Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>
        {showModal && <Authmodal setshowModal={setshowModal} setIsSignup={setIsSignup} isSignUp={isSignUp} />}
      </div>
    </div>
  );
};

export default Home;
