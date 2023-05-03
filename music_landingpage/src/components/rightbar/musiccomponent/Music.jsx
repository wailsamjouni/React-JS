import React from 'react'
import './Music.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


function Music(props) {
    const { img, episode, title, singer } = props;
    return (
        <div className='musiccom'>
            <FavoriteBorderOutlinedIcon className='like' />
            <span id='episode'>{episode} episodes</span>
            <div className='imgcontainer'>
                <img src={img} alt="" />
            </div>
            <div className='musicinfos'>
                <span id='title'>{title}</span>
                <span id='singer'>{singer}</span>
            </div>
        </div>
    )
}

export default Music