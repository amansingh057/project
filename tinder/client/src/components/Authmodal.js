import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'

const Authmodal = ({ setshowModal, setIsSignup, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [error, setError] = useState(null);
  const[cookies,setCookie,removeCookie] = useCookies(['user'])

  let navigate = useNavigate()
  console.log(email, password, confirm);
  function handleClick() {
    setshowModal(false);
    setIsSignup(true);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (isSignUp && password !== confirm) {
        setError("Passwords needs to match");
        return;
      }
      const response = await axios.post(`http://localhost:8000/${isSignUp ? 'signup' : 'login'}`,{email,password});
      // setCookie('Email',response.data.email)
      setCookie('UserId',response.data.userId)
      setCookie('AuthToken',response.data.token)

      const success = response.status===201;

      if(success &&isSignUp) navigate('/onboarding')
      if(success && !isSignUp) navigate('/dashboard')

      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⓧ
      </div>
      <h2> {isSignUp ? "CREATE ACCOUNT" : "SIGN IN"} </h2>
      <p>
        By clicking Log In, yo agree to our terms. learn how we process your
        data in our Privacr Policy.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="confirm password"
            required={true}
            onChange={(e) => setConfirm(e.target.value)}
          />
        )}
        <input className="secondary-button" type="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h2>GET THE APP</h2>
    </div>
  );
};

export default Authmodal;
