import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageTitle} from "../common/PageTitle";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { UserProfileData } from '../../redux/profile-reducer';

type ProfilePropsTypes = {
  setCurrentUserProfile: (userProfile: any) => void
  profileData: UserProfileData
}


export function Profile (props: ProfilePropsTypes) {
  return (
      <section>

        <PageTitle title="Profile info"/>

        <div className="border-theme-border border-t">

          <ProfileInfo profileData={props.profileData} />

          <MyPostsContainer/>

        </div>
      </section>
  )
}

