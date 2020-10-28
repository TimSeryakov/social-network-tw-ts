import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageTitle} from "../PageTitle/PageTitle";
import {StoreType} from "../../redux/store-handmade";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PropsType = {
  store: StoreType
}

export function Profile (props: PropsType) {
  return (
      <section>

        <PageTitle title="Profile info"/>

        <div className="border-theme-border border-t">

          <ProfileInfo/>

          <MyPostsContainer
                   borders="t"
                   store={props.store}
          />

        </div>
      </section>
  )
}

