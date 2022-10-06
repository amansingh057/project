import React, { useState } from "react";
import {auth} from "../firebase"
import {signInWithEmailAndPassword,signOut } from "firebase/auth";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [user,setUser]=useState(null)
  let [loader,setLoader]=useState(false)
  let [error,setError]=useState("")
  const trackEmail = function (e) {
    setEmail(e.target.value);
  };
  const trackPassword = function (e) {
    setPassword(e.target.value);
  };
  const printDetails = async function () {
    try{
      setLoader(true)
      // alert(email + " " + password);
      let userCred = await signInWithEmailAndPassword(auth, email, password)
      // console.log(userCred.user);
      setUser(userCred.user)
    }catch(err){
      setError(err.message)
      setTimeout(()=>{
        setError("")
      },2000)
    }
    setLoader(false)
  };
  const signout = async function (){
    await signOut(auth)
    setUser(null)
  }
  return (
    <>
    {
      error != "" ? <h1>Error is {error}</h1> :
        loader == true ? <h1>...Loading</h1> :
          user !=null ? <>
          <h1>user is {user.uid}</h1>
          <button onClick={signout} >Signout</button>
          </>  :
            <>
            <input
              type="email"
              placeholder="email"
              onChange={trackEmail}
              value={email}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              onChange={trackPassword}
              value={password}
            />
            <br />
            <button type="click" onClick={printDetails}>
              Submit
            </button>
            </>
    }
    </>
  );
}

export default Login;
