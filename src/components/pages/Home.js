import React from 'react'
import Feed from '../feed/Feed'
import Rightbar from '../rightbar/Rightbar'
import SideBar from '../sidebar/SideBar'
import Topbar from '../topbar/Topbar'
import './home.css'

function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
              <SideBar />
              <Feed />
              <Rightbar />
            </div>
            
        </>
    )
}

export default Home
