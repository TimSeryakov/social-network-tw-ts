import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = () => {
  return (
      <div className="py-3 px-6">
        <ProfileInfo/>
        <MyPosts/>
      </div>
  )
}

