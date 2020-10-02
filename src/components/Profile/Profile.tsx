import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageTitle} from "../PageTitle/PageTitle";
import {PostsDataType} from "../../redux/state";

type PropsType = {
  state: PostsStateType
}

type PostsStateType = {
  postsData: Array<PostsDataType>
}

export const Profile = (props: PropsType) => {
  return (
      <section>

        <PageTitle title="Profile info"/>

        <div className="border-theme-border border-t">
          <ProfileInfo/>

          <MyPosts postsData={props.state.postsData}/>
        </div>
      </section>
  )
}

