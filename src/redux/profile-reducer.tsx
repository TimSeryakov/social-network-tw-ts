import {v1} from "uuid";
import {ActionsTypes, AddPostActionType, PostsDataType, ProfilePageType, UpdateTypedPostTextActionType} from "./store-handmade";

const initialState = {
  postsData: [
    {id: v1(), text: "Сбербанк выкупил актрису Зою Бербер и назвал Сбербербер.", likesCount: 29},
    {id: v1(), text: "На всех корпоративах я всегда бесплатно фотографирую своих коллег. А вот удаляю их фотографии уже за деньги.", likesCount: 11},
    {id: v1(), text: "Ехал в яндекс такси и попал в яндекс пробку...", likesCount: 42},
  ],
  typedPostText: "",
}


const ADD_POST = "ADD-POST"
const UPDATE_TYPED_POST_TEXT = "UPDATE-TYPED-POST-TEXT"

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
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