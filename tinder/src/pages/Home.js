import React, { useState } from "react";
import Authmodal from "../components/Authmodal";
import Nav from "../components/Nav";

const Home = () => {
    const [showModal,setshowModal] = useState(false)
  const authToken = false;
  function handleClick() {
    console.log("Clicked");
    setshowModal(true)
  }
  return (
    <div className="overlay">
    
      <Nav minimal={false} authToken={authToken} setshowModal={setshowModal} showModal={showModal}/>
      <div className="home">
        <h1>Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>
        {
            showModal && <Authmodal setshowModal={setshowModal}/>
        }
      </div>
    </div>
  );
};

export default Home;
