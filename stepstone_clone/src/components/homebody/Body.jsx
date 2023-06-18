import React from 'react'
import './Body.scss'

function Body() {
    return (
        <div className='body'>
            <div className="body__top">
                <h2>Wo brauchst du Hilfe?</h2>
                <div className="body__toptop">
                    <div className="body__acc">
                        <span class="icon material-symbols-outlined">
                            euro
                        </span>
                        <div className="body__accinfo">
                            <h3>Mehr verdienen</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur  voluptates iusto ut.</p>
                        </div>
                    </div>
                    <div className="body__acc">
                        <span class="icon material-symbols-outlined">
                            rocket_launch
                        </span>
                        <div className="body__accinfo">
                            <h3>Schneller bewerben</h3>
                            <p>Lorem ipsum dolor  adipisicing elit. Aliqunt officia?</p>
                        </div>
                    </div>
                    <div className="body__acc"><span class="icon material-symbols-outlined">
                        search
                    </span>
                        <div className="body__accinfo">
                            <h3>Entdeckt werden</h3>
                            <p>Lorem ipsum dolor sit amet consectetur excepturi tempore eius.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body__bottom">
                <div className="body__card">
                    <img src="https://images.unsplash.com/photo-1593538312308-d4c29d8dc7f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <div className="body__cardinfo">
                        <h3>Mehr verdienen</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum sapiente non iste? Suscipit voluptates provident laborum voluptatem voluptate eius nisi? Vero sit dolor aspernatur dolore nostrum at, impedit commodi.</p>
                    </div>
                </div>
                <div className="body__card">
                    <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div className="body__cardinfo">
                        <h3>Mehr verdienen</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum sapiente non iste? Suscipit voluptates provident laborum voluptatem voluptate eius nisi? Vero sit dolor aspernatur dolore nostrum at, impedit commodi.</p>
                    </div>
                </div>
                <div className="body__card">
                    <img src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                    <div className="body__cardinfo">
                        <h3>Interview</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum sapiente non iste? Suscipit voluptates provident laborum voluptatem voluptate eius nisi? Vero sit dolor aspernatur dolore nostrum at, impedit commodi.</p>
                    </div>
                </div>
            </div>
            <button>More informations</button>
        </div>
    )
}

export default Body