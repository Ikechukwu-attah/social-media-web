import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import './topbar.css'

function Topbar() {
    return (
        <div className='topbarCointainer'>
            <div className="topbarLeft">
                <span className="logo">KudoSocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                  <SearchIcon className='searchBarIcon' />
                  <input type="text" className='searchBarInput' placeholder='search for your friends' />
                </div>
             
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>

                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        <span className="topbarIconBadge">3</span>
                    </div>

                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">5</span>
                    </div>

                </div>
                
                <img src="assets/profileImage.jpg" alt="profile" className='imgProfile' />
            </div>
        </div>
    )
}

export default Topbar
