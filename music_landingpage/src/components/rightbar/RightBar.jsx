import React from 'react'
import './RightBar.css'
import TopBar from './topbar/TopBar'
import Bottombar from './bottombar/Bottombar'

function RightBar() {
    return (
        <div className='rightbar'>
            <TopBar />
            <Bottombar />
        </div>
    )
}

export default RightBar