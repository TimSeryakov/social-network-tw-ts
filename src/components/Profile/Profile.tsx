import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = () => {
  return (
      <>
        <ProfileInfo/>
        <MyPosts/>
      </>
  )
}

