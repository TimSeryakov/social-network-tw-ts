import {v1} from "uuid";
import {ActionsTypes, AddPostActionType, PostsDataType, ProfilePageType, UpdateTypedPostTextActionType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_TYPED_POST_TEXT = "UPDATE-TYPED-POST-TEXT"

const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      if (state.typedPostText) {
        const stateCopy = {...state}
        const newPost: PostsDataType = {id: v1(), text: stateCopy.typedPostText, likesCount: 0}
        stateCopy.postsData.push(newPost)
        stateCopy.typedPostText = ""
      return stateCopy
      }
      return state
    case UPDATE_TYPED_POST_TEXT:
      const stateCopy = {...state}
      stateCopy.typedPostText = action.newValue
      return stateCopy
    default:
      return state
  }
}

export const addPostAC = (): AddPostActionType =>
    ({ type: ADD_POST })

export const updateTypedPostTextAC = (newValue: string): UpdateTypedPostTextActionType =>
    ({ type: UPDATE_TYPED_POST_TEXT, newValue: newValue })


export default profileReducer