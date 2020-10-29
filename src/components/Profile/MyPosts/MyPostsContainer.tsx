import React from 'react';
import {addPostAC, updateTypedPostTextAC} from "../../../redux/profile-reducer";
import { StoreContext } from '../../../redux/store-context';
import {MyPosts} from "./MyPosts";


export function MyPostsContainer () {

  return (
      <StoreContext.Consumer>
        { // бывает баг если не переносить на новую строку
          (store: any) => {

            const state = store.getState()

            const addPost = () => {
              store.dispatch(addPostAC())
            }

            const updateTypedPostText = (newValue: string) => {
              store.dispatch(updateTypedPostTextAC(newValue))
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
        }
      </StoreContext.Consumer>
  )
}
