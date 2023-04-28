import React, { useState } from 'react'
import './Post.scss'
import Comments from '../comments/Comment'

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom'

function Post({ post }) {

    const [comment, setComment] = useState(false);
    const liked = false;
    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userinfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.id}`}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>2 min ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="like">
                        {!liked ? <FavoriteBorderOutlinedIcon /> : <FavoriteOutlinedIcon />}
                        12 Likes

                    </div>
                    <div className="like">
                        <TextsmsOutlinedIcon onClick={() => setComment(!comment)} />
                        Comments
                    </div>
                    <div className="like">
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                {comment && <Comments />}
            </div>
        </div>
    )
}

export default Post