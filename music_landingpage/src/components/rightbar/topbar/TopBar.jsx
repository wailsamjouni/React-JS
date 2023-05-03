import React from 'react'
import './TopBar.css'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MyImage from '../../../assets/my-mini.jpg'

function TopBar() {
    return (
        <div className='topbar'>
            <div className='icons'>
                <ChevronLeftOutlinedIcon style={{ fontSize: '30px', cursor: 'pointer' }} />
                <ChevronRightOutlinedIcon style={{ opacity: '0.3', fontSize: '30px', cursor: 'pointer' }} />
            </div>
            <div className='search'>
                <SearchOutlinedIcon style={{ fontSize: '30px', cursor: 'pointer' }} />
                <input type="text" placeholder='Search' />
            </div>
            <div className='userinfo'>
                <span>Wail</span>
                <img src={MyImage} alt="" />
                <KeyboardArrowDownOutlinedIcon style={{ fontSize: '30px', cursor: 'pointer' }} />
            </div>
        </div>
    )
}

export default TopBar