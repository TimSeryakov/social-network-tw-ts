import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageTitle} from "../common/PageTitle";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { UserProfileDataType } from '../../redux/profile-reducer';
import {Redirect} from "react-router-dom";

type ProfilePropsTypes = {
  setCurrentUserProfile: (userProfile: UserProfileDataType) => void
  profileData: UserProfileDataType
  isProfileDataFetching: boolean
  isAuth: boolean
}


export function Profile (props: ProfilePropsTypes) {

  if (!props.isAuth) return <Redirect to="/login"/>

  return (
      <section>

        <PageTitle title="Profile info" isFetching={props.isProfileDataFetching}/>

        <div className="border-theme-border border-t">

          <ProfileInfo profileData={props.profileData} />

          <MyPostsContainer/>

        </div>
      </section>
  )
}

