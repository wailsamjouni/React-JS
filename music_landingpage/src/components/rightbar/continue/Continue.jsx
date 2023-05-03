import React from 'react'
import './Continue.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

function Continue() {
    return (
        <div className='continue'>
            <img src='https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="" />
            <div className="continueright">
                <div className="continuetop">
                    <span>Episonde 1: Beat it</span>
                    <MoreVertOutlinedIcon style={{ fontSize: '20px', cursor: 'pointer' }} />
                </div>
                <span id='title'>Macho man</span>
                <div className="continuebottom">
                    <span>5 min out of 8</span>
                    <PlayCircleFilledOutlinedIcon style={{ fontSize: '35px', cursor: 'pointer', color: 'orange' }} />
                </div>
                <div className='line'>
                </div>
            </div>
        </div>
    )
}

export default Continue