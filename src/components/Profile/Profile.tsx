import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageTitle} from "../PageTitle/PageTitle";


export const Profile = () => {
  return (
      <section>

        <PageTitle title="Profile info"/>

        <div className="border-theme-border border-t">
          <ProfileInfo/>

          <MyPosts/>
        </div>
      </section>
  )
}

