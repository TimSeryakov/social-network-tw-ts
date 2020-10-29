import React from 'react';
import {StoreType} from "../../../redux/store-handmade";
import {addPostAC, updateTypedPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type PropsType = {
  store: StoreType
}

export function MyPostsContainer (props: PropsType) {

  const state = props.store.getState()

  const addPost = () => {
      props.store.dispatch(addPostAC())
  }

  const updateTypedPostText = (newValue: string) => { // onPostChange у Димы
    props.store.dispatch(updateTypedPostTextAC(newValue))
  }

  return (
      <MyPosts borders={"t"}

               postsData={state.profilePage.postsData}
               addPost={addPost}

               typedPostText={state.profilePage.typedPostText}
               updateTypedPostText={updateTypedPostText}
       />
  )
}
