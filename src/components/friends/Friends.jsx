import React from 'react'
import './firends.css'



function Friends({user}) {
    return (
        <li className="sidebarFriends">
            <img src={user.profilePicture} alt="friend" className="sidebarFriendPics" />
            <span className='sidebarFriendsName'>{user.username}</span>
      </li>
    
    )
}

export default Friends
