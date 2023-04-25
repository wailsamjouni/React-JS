import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'

function Login() {

  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hi Poeple.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, ea! Aperiam excepturi explicabo reiciendis quas modi similique facere voluptas obcaecati.</p>
                <span>D'ont you have an account?</span>
                <Link to={"/register"}>
                    <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="">
                    <input type="text" placeholder='Username'/>
                    <input type="password" placeholder='Password'/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login