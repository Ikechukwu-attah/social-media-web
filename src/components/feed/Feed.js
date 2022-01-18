import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import { Username } from '../dummyData'
import { PostDetails } from '../dummyData'

import './feed.css'


function Feed() {
    return (
        <div className='feed'>
           <div className='feedWrapper'>
               <Share />

               { PostDetails.map(posting=>{
                   return(
                      <Post 
                      key = {posting.id}
                      post = {posting} 
                      />
                   )
               }) }
              
               
           </div>
        </div>
    )
}

export default Feed
