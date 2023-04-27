import React, { useContext } from 'react'
import './Stories.scss'

function Stories() {

    const stories = [
        {
            id: 1,
            name: 'Marc',
            img: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 2,
            name: 'Bery',
            img: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        },
        {
            id: 3,
            name: 'Jonas',
            img: 'https://images.unsplash.com/photo-1543726969-a1da85a6d334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1236&q=80'
        },
        {
            id: 4,
            name: 'Alfredo',
            img: 'https://plus.unsplash.com/premium_photo-1664100478033-7f71a67363d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                <img src='https://images.unsplash.com/photo-1535182539448-8bf2aee81484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt="" />
                <span>Wail</span>
                <button>+</button>
            </div>
            {stories.map(story => {

                const { id, name, img } = story;

                return (
                    <div key={id} className="story">
                        <img src={img} alt="" />
                        <span>{name}</span>
                    </div>
                );
            })}

        </div>
    )
}

export default Stories