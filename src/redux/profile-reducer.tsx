import {v1} from "uuid";
import {ActionsTypes, AddPostActionType, PostsDataType, ProfilePageType, UpdateTypedPostTextActionType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_TYPED_POST_TEXT = "UPDATE-TYPED-POST-TEXT"

const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      if (state.typedPostText) {
        const newPost: PostsDataType = {id: v1(), text: state.typedPostText, likesCount: 0}
        state.postsData.push(newPost)
        state.typedPostText = ""
      }
      return state
    case UPDATE_TYPED_POST_TEXT:
      state.typedPostText = action.newValue
      return state
    default:
      return state
  }
}

export const addPostAC = (): AddPostActionType =>
    ({ type: ADD_POST })

export const updateTypedPostTextAC = (newValue: string): UpdateTypedPostTextActionType =>
    ({ type: UPDATE_TYPED_POST_TEXT, newValue: newValue })


export default profileReducer