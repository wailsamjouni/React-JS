import React from 'react'
import './Comment.scss'

function Comment() {

    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas provident accusamus officia quae aspernatur ipsam, consectetur aut dolores iure dolor laboriosam ad, corporis quod voluptas dolorum sint doloremque molestiae!",
            name: "Alice Smith",
            userId: 2,
            profilePicture:
                "https://images.unsplash.com/photo-1682207151041-3b5dca526dd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
            id: 2,
            desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam!",
            name: "Bob Johnson",
            userId: 3,
            profilePicture:
                "https://plus.unsplash.com/premium_photo-1676648534973-dd205cb63d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
        },
        {
            id: 3,
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam!",
            name: "Jane Lee",
            userId: 4,
            profilePicture:
                "https://images.unsplash.com/photo-1682353213492-8433d437855a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 4,
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem!",
            name: "John Doe",
            userId: 1,
            profilePicture:
                "https://images.unsplash.com/photo-1682534301949-136d3162dc55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ];


    return (
        <div className="comments">
            <div className="writecomment">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                <input type="text" placeholder='write a comment' />
                <button>Send</button>
            </div>
            {comments.map(comment => {

                const { id, desc, name, userId, profilePicture } = comment;

                return (
                    <div className="comment" key={id}>
                        <img src={profilePicture} alt="" />
                        <div className="info">
                            <span>{name}</span>
                            <p>{desc}</p>
                        </div>
                        <span className='date'>1 hour ago</span>
                    </div>
                );
            })}
        </div>
    )
}

export default Comment