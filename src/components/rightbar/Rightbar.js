import React from 'react'
import Online from '../online/Online'
import { Username } from '../dummyData'
import './rightbar.css'

function Rightbar({profile}) {

    const HomeRightBar = ()=>{
        return(
            <>
                          <div className="birthdayContainer">
                  <img src="/assets/birthday.png" alt="" className="birthdayImg" />
                  <span className="birthdayText">
                      <b>Chika Adaugo</b> and <b>3 other friends</b> have birthday today
                  </span>
               
              </div>
              <img src="/assets/ads.jpg" alt="advert" className="rightbarAds" />
              <h4 className="rightbarTitle">Online friends</h4>
              <ul className="rightbarFriendList">
                 {Username.map(users=>{
                    return( 
                    <Online
                       key={users.id}
                       user={users}

                     />
                    )
                 })}
              </ul>
            
            </>
        );

      
    }

    const ProfileRightBar = ()=>{
        return(
           <>
           <h4 className="rightBarTitle">User Info</h4>
           <div className="rightBarInfo">
               <div className="rightBarInfoItem">
                   <span className="rightBarInfoKey">City:</span>
                   <span className="rightBarInfoValue">NewYork</span>
               </div>

               <div className="rightBarInfoItem">
                   <span className="rightBarInfoKey">From:</span>
                   <span className="rightBarInfoValue">Madrid</span>
               </div>

               <div className="rightBarInfoItem">
                   <span className="rightBarInfoKey">Relationship:</span>
                   <span className="rightBarInfoValue">Single</span>
               </div>

              <h4 className="rightBarTitle">
                  User friends
              </h4>
               <div className="rightBarFollowings">
                   <div className="rightBarFollowing">
                       <img src="/assets/friend3.jpg" alt="profile" className="rightBarFollowingImg" />
                       <span className="rightBarFollowingName">james judge</span>
                   </div>

                   <div className="rightBarFollowing">
                       <img src="/assets/friend3.jpg" alt="profile" className="rightBarFollowingImg" />
                       <span className="rightBarFollowingName">james judge</span>
                   </div>

                   <div className="rightBarFollowing">
                       <img src="/assets/friend3.jpg" alt="profile" className="rightBarFollowingImg" />
                       <span className="rightBarFollowingName">james judge</span>
                   </div>

                   <div className="rightBarFollowing">
                       <img src="/assets/friend3.jpg" alt="profile" className="rightBarFollowingImg" />
                       <span className="rightBarFollowingName">james judge</span>
                   </div>

                   <div className="rightBarFollowing">
                       <img src="/assets/friend3.jpg" alt="profile" className="rightBarFollowingImg" />
                       <span className="rightBarFollowingName">james judge</span>
                   </div>

                   <div className="rightBarFollowing">
                       <img src="/assets/friend3.jpg" alt="profile" className="rightBarFollowingImg" />
                       <span className="rightBarFollowingName">james judge</span>
                   </div>
                   
               </div>
           </div>
           </>
        )
    }
    return (
        <div className='rightBar'>
          <div className="rightbarWrapper">
              { profile? <ProfileRightBar />: <HomeRightBar/>}
          </div>

        </div>
    )
}

export default Rightbar
