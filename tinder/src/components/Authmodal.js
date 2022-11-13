import React, { useState } from 'react'

const Authmodal = ({setshowModal,setIsSignup,isSignUp}) => {
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [confirm,setConfirm] = useState(null)
    const[error,setError] = useState(null)
    console.log(email,password,confirm)
    function handleClick(){
        setshowModal(false)
        setIsSignup(true)
    }
    function handleSubmit(e){
        e.preventDefault()
        try{
            if(isSignUp && (password !==confirm)){
                setError("Passwords needs to match")
            }
            console.log("make a post request")
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div className='auth-modal'>
        <div className='close-icon' onClick={handleClick}>ⓧ</div>
        <h2> {isSignUp ? 'CREATE ACCOUNT' : 'SIGN IN'} </h2>
        <p>By clicking Log In, yo agree to our terms. learn how we process your data in our Privacr Policy.</p>
        <form onSubmit={handleSubmit}>
            <input
            type='email'
            id='email'
            name='email'
            placeholder='email'
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type='password'
            id='password'
            name='password'
            placeholder='password'
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            />
            {isSignUp && <input
            type='password'
            id='password-check'
            name='password-check'
            placeholder='confirm password'
            required={true}
            onChange={(e) => setConfirm(e.target.value)}
            />}
            <input className='secondary-button' type='submit'/>
            <p>{error}</p>
        </form>
        <hr/>
        <h2>GET THE APP</h2>
    </div>
  )
}

export default Authmodal