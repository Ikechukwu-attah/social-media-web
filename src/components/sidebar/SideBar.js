import React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SchoolIcon from '@mui/icons-material/School';
import Friends from '../friends/Friends';
import { Username } from '../dummyData';
import './sidebar.css'
import RssFeed from '@mui/icons-material/RssFeed';


function SideBar() {
    return (
        <div className='sideBar'>
           <div className="sidebarWrapper">
               <ul className="sidebarList">
                 <li className="sidebarItem">
                   <RssFeedIcon className='sidebarIcon' />
                   <span className="sidebarListItemText">Feed</span>
                 </li>

                 <li className="sidebarItem">
                   <ChatIcon className='sidebarIcon' />
                   <span className="sidebarListItemText">Chat</span>
                 </li>

                 <li className="sidebarItem">
                   <VideoLibraryIcon className='sidebarIcon' />
                   <span className="sidebarListItemText">Videos</span>
                 </li>

                 <li className="sidebarItem">
                   <GroupsIcon className='sidebarIcon' />
                   <span className="sidebarListItemText">Groups</span>
                 </li>

                 <li className="sidebarItem">
                   <BookmarkIcon className='sidebarIcon' />
                   <span className="sidebarListItemText">Bookmarks</span>
                 </li>

                 <li className="sidebarItem">
                   <HelpIcon className='sidebarIcon' />
                   <span className="sidebarListItemText">Questions</span>
                 </li>

                 <li className="sidebarItem">
                   <WorkOutlineIcon className='sidebarIcon' />
                   <span className="sidebarListItemText">Jobs</span>
                 </li>

                 <li className="sidebarItem">
                   <EventAvailableIcon className='sidebarIcon' />
                   <span className="sidebarListItemText">Event</span>
                 </li>

                 <li className="sidebarItem">
                   <SchoolIcon className='sidebarIcon' />
                   <span className="sidebarListItemText">Courses</span>
                 </li>

               </ul>
               <button className='sidebarButton'>Show more</button>
               <hr className='sidebarHr'/>

               <ul className="sidebarFriendList">
                   {Username.map(users=>{
                     return(
                       <Friends
                        key = {users.id}
                         user= {users}
                       />
                     )
                   })} 
               </ul>
           </div>
        </div>
    )
}

export default SideBar
