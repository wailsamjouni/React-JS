import React from 'react'
import './Trending.css'

function Trending() {
    return (
        <div className='trending'>
            <div className="trendingsingers">
                <img src="https://images.unsplash.com/photo-1505282722405-413748d3de7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" />
                <span id='title'>Taylor</span>
            </div>
            <div className="trendingsingers">
                <img src="https://images.unsplash.com/photo-1505100119535-f14893f91436?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                <span id='title'>Joel</span>
            </div>
            <div className="trendingsingers">
                <img src="https://images.unsplash.com/photo-1542367906-cfaaad7277db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                <span id='title'>Garcia</span>
            </div>
            <div className="trendingsingers">
                <img src="https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80" alt="" />
                <span id='title'>Vidar</span>
            </div>
            <div className="trendingsingers">
                <img src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <span id='title'>Melanie</span>
            </div>
        </div>
    )
}

export default Trending