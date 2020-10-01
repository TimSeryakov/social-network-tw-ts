import React from 'react';
import {MyPosts, PostsDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageTitle} from "../PageTitle/PageTitle";

type PropsType = {
  postsData: Array<PostsDataType>
}

export const Profile = (props: PropsType) => {
  return (
      <section>

        <PageTitle title="Profile info"/>

        <div className="border-theme-border border-t">
          <ProfileInfo/>

          <MyPosts postsData={props.postsData}/>
        </div>
      </section>
  )
}

