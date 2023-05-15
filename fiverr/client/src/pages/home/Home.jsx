import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import Trusted from '../../components/trusted/Tusted'
import Slide from '../../components/slide/Slide'
import { cards, projects } from '../../data'
import CatCard from '../../components/category/CatCard'
import ProjectCard from '../../components/projects/ProjectCard'

function Home() {
    return (
        <div className='home'>
            <Featured />
            <Trusted />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {
                    cards.map(card => {
                        return (
                            <CatCard key={card.id} item={card}
                            />
                        )
                    })
                }
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>
                            A whole world of freelance talent at your fingertips
                        </h1>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            The best for every budgets
                        </div>
                        <p>
                            Find high-quality services at every price point.
                            No hourly rates,
                            just project-based pricing.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Quality work done quickly
                        </div>
                        <p>
                            Find the right freelancer to begin working
                            on your project within
                            minutes.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Protected payments, every time
                        </div>
                        <p>
                            Always know what you'll pay upfront. Your payment isn't
                            released
                            until you approve the work.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            24/7 support
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly
                            rates, just project-based pricing.
                        </p>
                    </div>
                    <div className="item">
                        <video src="./img/video.mp4" controls></video>
                    </div>
                </div>
            </div>
            {/* 2nd Feature */}
            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>fiverr business</h1>
                        <h1>A business solution designed for teams</h1>
                        <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Lorem ipsum dolor sit amet.
                        </div>
                        <button>Explore fiverr business</button>
                    </div>
                    <div className="item">
                        <img src="https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F844c7f61144648ceaf46e4e64e97341e" alt="" />
                    </div>
                </div>
            </div>
            <Slide slidesToShow={4} arrowsScroll={4}>
                {
                    projects.map(card => {
                        return (
                            <ProjectCard key={card.id} item={card}
                            />
                        )
                    })
                }
            </Slide>
        </div>
    )
}

export default Home