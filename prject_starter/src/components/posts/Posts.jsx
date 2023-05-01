import React from 'react'
import './Posts.scss'
import Post from './Post';

function Posts() {

    const posts = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic:
                "https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img:
                "https://images.unsplash.com/photo-1589264856561-d47869434f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 2,
            name: "Jane Smith",
            userId: 2,
            profilePic:
                "https://plus.unsplash.com/premium_photo-1678453146937-ef2429ec012b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

            desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            img:
                "https://plus.unsplash.com/premium_photo-1680813629057-0b7604d1f309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 3,
            name: "Bob Johnson",
            userId: 3,
            profilePic:
                "https://images.unsplash.com/photo-1682070545304-50dd353549d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",

            img:
                "https://images.unsplash.com/photo-1682402178953-f2cb484d4024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        },
        {
            id: 4,
            name: "Alice Lee",
            userId: 4,
            profilePic:
                "https://plus.unsplash.com/premium_photo-1677260349790-b3372d0acc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",

            img:
                "https://images.unsplash.com/photo-1682531818046-54d801e5b04c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
    ];

    return (
        <div className='posts'>
            {
                posts.map(post => {
                    return (
                        <Post key={post.id} post={post} />
                    );
                })
            }
        </div>
    )
}

export default Posts