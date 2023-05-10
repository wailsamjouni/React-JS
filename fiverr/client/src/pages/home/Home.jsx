import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import Trusted from '../../components/trusted/Tusted'

function Home() {
    return (
        <div className='home'>
            <Featured />
            <Trusted />
        </div>
    )
}

export default Home