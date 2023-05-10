import React, { useEffect, useState } from 'react'
import './NavBar.scss'
import { Link, useLocation } from 'react-router-dom'

function NavBar() {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    const currentUser = {
        id: 1,
        username: 'Wail',
        isSeller: true
    };

    const isScrolled = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', isScrolled);
        return () => {
            window.removeEventListener('scroll', isScrolled);
        }
    })

    return (
        <div className={pathname !== '/' || active ? 'navbar active' : 'navbar'}>
            <div className="container">
                <div className="logo">
                    <Link className='link' to='/'>
                        <span>fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Fiverr Busniss</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser &&
                        <div
                            onClick={() => setOpen(!open)}
                            className="user">
                            <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt="" />
                            <span>{currentUser?.username}</span>
                            {
                                open &&
                                <div className="options">
                                    {currentUser?.isSeller &&
                                        (
                                            <>
                                                <Link className='link' to='/mygigs'>Gigs</Link>
                                                <Link className='link' to='/add'>Add New Gig</Link>
                                            </>
                                        )
                                    }
                                    <Link className='link' to='/orders'>Orders</Link>
                                    <Link className='link' to='/messages'>Messages</Link>
                                    <Link className='link' to='/'>Logout</Link>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
            {(active || pathname !== '/') &&
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to='/'>Graphics & Design</Link>
                        <Link className="link" to='/'>Video & Animation</Link>
                        <Link className="link" to='/'></Link>
                        <Link className="link" to='/'>Writing & Translating</Link>
                        <Link className="link" to='/'>AI Services</Link>
                        <Link className="link" to='/'>Digital Marketing</Link>
                        <Link className="link" to='/'>Music & Audio</Link>
                        <Link className="link" to='/'>Programming & Tech</Link>
                        <Link className="link" to='/'>Business</Link>
                        <Link className="link" to='/'>Lifestyle</Link>
                    </div>
                </>
            }
        </div>
    )
}

export default NavBar