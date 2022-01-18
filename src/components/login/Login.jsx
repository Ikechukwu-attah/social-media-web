import React from 'react'
import './login.css'

const Login = () => {
    return (
        <div className='login'>
           <div className="loginWrapper">
               <div className="loginLeft">
                   <h3 className="loginLogo">SirkudSocial</h3>
                   <span className="loginDesc">Connect with your friend all over the world</span>
               </div>
               <div className="loginRight">
                   <div className="loginBox">
                       <input placeholder="email" className="loginInput" />
                       <input placeholder="password" className="loginInput" />
                       <button className='loginButton'>Login</button>
                       <span className="loginForgot">Forgot Password?</span>
                       <button className="loginRegisterButton">
                           Create a new account
                       </button>
                   </div>
               </div>
            </div> 
        </div>
    )
}

export default Login
