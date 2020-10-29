import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageTitle} from "../PageTitle/PageTitle";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export function Profile () {
  return (
      <section>

        <PageTitle title="Profile info"/>

        <div className="border-theme-border border-t">

          <ProfileInfo/>

          <MyPostsContainer/>

        </div>
      </section>
  )
}

