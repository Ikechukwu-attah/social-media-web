import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Username } from '../dummyData';
import './post.css'

function Post({post}) {
    const username = Username.filter(user=>user.id === post?.userId);
    const[like, setLike] = useState(post.like);
    const[isLiked, setIsLiked] = useState(false);

    const likeHandler = ()=>{
        setLike(isLiked ? like - 1: like + 1);
        setIsLiked(!isLiked);

    }
    return (
        <div className='post'>

            <div className="postWrapper">
                <div className="postTop">
                   <div className="postTopLeft">
                       <img src={username[0].profilePicture} alt="profile" className="postProfileImg" />
                       <span className="postUsername">{username[0].username}</span>
                       <span className="postDate">{post.date}</span>
                   </div>
                   <div className="postIcon">
                       <MoreVertIcon />
                   </div>
                </div>
                <div className="postCenter">
                     <span className="postText">
                         {post.desc}
                     </span>
                     <img src={post.photo} alt="new year" className="postTextImg" />

                </div>
                <div className="postBottom">
                     <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="postLike postAction" onClick={likeHandler} />
                        <img src="/assets/heart.png" alt="" className="postLove postAction" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people likes it</span>
                     </div>

                     <div className="postBottomRight">
                        <span className="postComment">
                            {post.comments} comments
                        </span>
                     </div>
                </div>
            </div>
      
        </div>
    )
}

export default Post
