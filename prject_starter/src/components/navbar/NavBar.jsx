import React, { useContext } from 'react'
import './NavBar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkMode';

function NavBar() {

  const {darkMode, toggle} = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="left">
        <Link to={"/"} style={{textDecoration: 'none'}}>
          <span>Wailsocial</span>
        </Link>
        <HomeOutlinedIcon />
        {
          !darkMode ? <DarkModeOutlinedIcon onClick={toggle}/> :<WbSunnyOutlinedIcon onClick={toggle}/>
        }
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search'/>
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
          <span>Wail Samjouni</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar