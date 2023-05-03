import React from 'react'
import RadioOutlinedIcon from '@mui/icons-material/RadioOutlined';
import './LeftBar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
function LeftBar() {
    return (
        <div className='leftbar'>
            <div className="logo">
                <RadioOutlinedIcon />
                <span>Wailcast</span>
            </div>
            <span id='title'>Menu</span>
            <div className="categoriestop">
                <div className="item item1">
                    <HomeOutlinedIcon className='icon' />
                    <span id='cat'>Home</span>
                </div>
                <div className="item">
                    <CategoryOutlinedIcon />
                    <span id='cat'>Categories</span>
                </div>
                <div className="item">
                    <TurnedInNotOutlinedIcon />
                    <span id='cat'>Saved</span>
                </div>
            </div>
            <span id='title'>Playlists</span>
            <div className="categoriesbottom">
                <span id='list'>Meditations</span>
                <span id='list'>About space</span>
                <span id='list'>Bookcast</span>
                <span id='list'>Design practice</span>
                <span id='list'>Motivation&focus</span>
            </div>
        </div>
    )
}

export default LeftBar