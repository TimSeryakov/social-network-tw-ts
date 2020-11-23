import {v1} from "uuid";
import {ActionsTypes} from "./store-redux";

const initialState = {
  postsData: [
    {id: v1(), text: "Сбербанк выкупил актрису Зою Бербер и назвал Сбербербер.", likesCount: 29},
    {id: v1(), text: "На всех корпоративах я всегда бесплатно фотографирую своих коллег. А вот удаляю их фотографии уже за деньги.", likesCount: 11    },
    {id: v1(), text: "Ехал в яндекс такси и попал в яндекс пробку...", likesCount: 42},
  ] as PostDataType[], // Array<PostDataType>
  typedPostText: "" as string,
}

export type ProfilePageType = typeof initialState

export type PostDataType = {
  id: string
  text: string
  likesCount: number
}

export type UpdateTypedPostTextActionType = {
  type: typeof UPDATE_TYPED_POST_TEXT
  newValue: string
}

export type AddPostActionType = {
  type: typeof ADD_POST
}

const ADD_POST = "ADD-POST"
const UPDATE_TYPED_POST_TEXT = "UPDATE-TYPED-POST-TEXT"

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      if (state.typedPostText) {
        const newPost = state.typedPostText

        // State deep copy before change and return
        return {
          ...state,
          postsData: [...state.postsData, {id: v1(), text: newPost, likesCount: 0}],
          typedPostText: ""
        }
      }
      return state
    case UPDATE_TYPED_POST_TEXT:
      return {...state, typedPostText: action.newValue}
    default:
      return state
  }
}

export const addPostAC = (): AddPostActionType =>
    ({type: ADD_POST})

export const updateTypedPostTextAC = (newValue: string): UpdateTypedPostTextActionType =>
    ({type: UPDATE_TYPED_POST_TEXT, newValue})


export default profileReducer