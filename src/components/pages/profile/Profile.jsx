import React from 'react'
import Feed from '../../feed/Feed'
import Rightbar from '../../rightbar/Rightbar'
import SideBar from '../../sidebar/SideBar'
import Topbar from '../../topbar/Topbar'
import './profile.css'

function Profile() {
    return (
        <>
        <Topbar />
        <div className="profile">
          <SideBar />

          <div className="profileRight">
              <div className="profileCoverTop">
                  <img src="assets/cover.jpg" alt="cover"  className='profileCovers'/>
                  <img src="assets/friend2.jpg" alt="profile" className='profilePics'/>
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">Jane</h4>
                  <span className="profileInfoDesc">Very Social and Humble</span>
              </div>
              <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile />
              </div>
          </div>
            
         
        </div>
        
    </>
    )
}

export default Profile
