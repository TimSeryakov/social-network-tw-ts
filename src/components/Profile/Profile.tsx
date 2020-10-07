import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageTitle} from "../PageTitle/PageTitle";
import {PostsDataType} from "../../redux/state";

type PropsType = {
  profilePage: PostsStateType
  addPostCallback: (postMessage: string) => void
  updateTypedPostTextCallback: (newValue: string) => void
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
                   addPostCallback={props.addPostCallback}
                   typedPostText={props.profilePage.typedPostText}
                   updateTypedPostTextCallback={props.updateTypedPostTextCallback}
                   borders="t"
          />

        </div>
      </section>
  )
}

