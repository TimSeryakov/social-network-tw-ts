import React from 'react';
import {ActionsTypes, PostsDataType} from "../../../redux/store-handmade";
import {BordersPropsType} from "../../common/utils/parseBordersProps";
import {addPostAC, updateTypedPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


type PropsType = {
  postsData: Array<PostsDataType>
  typedPostText: string
  borders: BordersPropsType
  dispatch: (action: ActionsTypes) => void
}


export function MyPostsContainer (props: PropsType) {

  const addPost = () => {
      props.dispatch(addPostAC())
  }

  const updateTypedPostText = (newValue: string) => { // onPostChange у Димы
    props.dispatch(updateTypedPostTextAC(newValue))
  }

  return <MyPosts borders={props.borders}
                  postsData={props.postsData}
                  addPost={addPost}
                  typedPostText={props.typedPostText}
                  updateTypedPostText={updateTypedPostText}
          />
}
