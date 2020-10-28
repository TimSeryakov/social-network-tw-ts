import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageTitle} from "../PageTitle/PageTitle";
import {ActionsTypes, PostsDataType} from "../../redux/store-handmade";

type PropsType = {
  profilePage: PostsStateType
  dispatch: (action: ActionsTypes) => void
}

type PostsStateType = {
  postsData: Array<PostsDataType>
  typedPostText: string
}

export function Profile (props: PropsType) {
  return (
      <section>

        <PageTitle title="Profile info"/>

        <div className="border-theme-border border-t">

          <ProfileInfo/>

          <MyPosts postsData={props.profilePage.postsData}
                   dispatch={props.dispatch}
                   typedPostText={props.profilePage.typedPostText}
                   borders="t"
          />

        </div>
      </section>
  )
}

