import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageTitle} from "../common/PageTitle";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileDataType} from '../../redux/profile-reducer';

type ProfilePropsTypes = {
  setCurrentUserProfile: (userProfile: UserProfileDataType) => void
  profileData: UserProfileDataType
  isProfileDataFetching: boolean
  userStatus: string
  updateUserStatus: (userProfileStatus: string) => void
  isAuth: boolean
  }


export function Profile (props: ProfilePropsTypes) {

  return (
      <section>

        <PageTitle title="Profile info" isFetching={props.isProfileDataFetching}/>

        <div className="border-theme-border border-t">

          <ProfileInfo profileData={props.profileData}
                       userStatus={props.userStatus}
                       updateUserStatus={props.updateUserStatus}
                       isProfileDataFetching={props.isProfileDataFetching}
          />

          <MyPostsContainer/>

        </div>
      </section>
  )
}

