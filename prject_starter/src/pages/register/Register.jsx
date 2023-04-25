import React from 'react'
import './Register.scss'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Social Network.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, ea! Aperiam excepturi explicabo reiciendis quas modi similique facere voluptas obcaecati.</p>
                <span>D'ont you have an account?</span>
                <Link to={"/login"}>
                  <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form action="">
                    <input type="text" placeholder='Username'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <input type="text" placeholder='Name'/>
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register