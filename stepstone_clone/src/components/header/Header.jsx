import React from 'react'
import './Header.scss'

function Header() {
    return (
        <div className='container'>
            <div class="overlay"></div>
            <header className='header'>
                <div class="header__top">
                    <div class="logo">
                        <h3>OurJo<span>bs.</span></h3>
                    </div>
                    <ul>
                        <li><a href="#">Employer</a></li>
                        <li><a href="#">My Jobs</a></li>
                        <li><a href="#" class="loginLink">Login</a></li>
                        <div class="login__container">
                            <span>Login</span>
                            <span>Register</span>
                            <hr />
                            <span>Login for company</span>
                        </div>
                    </ul>
                    <div class="menu">
                        <span class="material-symbols-outlined icon hamburger"> menu </span>
                        <span class="material-symbols-outlined icon close"> close </span>
                        <div class="menulist">
                            <span>Hallo</span>
                            <span>Hallo</span>
                            <span>Hallo</span>
                            <span>Hallo</span>
                        </div>
                    </div>
                </div>
                <div class="header__bottom">
                    <div class="header__bottomtop">
                        <div class="header__inputwrapper">
                            <div class="header__inputleft">
                                <span class="material-symbols-outlined icon"> search </span>
                                <input type="text" placeholder="Enter your job" />
                            </div>
                            <div class="header__inputleft">
                                <span class="material-symbols-outlined icon">
                                    location_on
                                </span>
                                <input type="text" placeholder="Enter the city" />
                            </div>
                        </div>
                        <button class="header__findjob">Find your job</button>
                    </div>
                    <div class="header__bottombottom">
                        <button class="header__btncategory">Part time</button>
                        <button class="header__btncategory">Fulltime</button>
                        <button class="header__btncategory">Intership</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header