import {v1} from "uuid";
import {ActionsTypes} from "./store-redux";

const initialState = {
  postsData: [
    {id: v1(), text: "Сбербанк выкупил актрису Зою Бербер и назвал Сбербербер.", likesCount: 29},
    {id: v1(), text: "На всех корпоративах я всегда бесплатно фотографирую своих коллег. А вот удаляю их фотографии уже за деньги.", likesCount: 11    },
    {id: v1(), text: "Ехал в яндекс такси и попал в яндекс пробку...", likesCount: 42},
  ] as PostDataType[], // Array<PostDataType>
  typedPostText: "" as string,
  currentUserProfile: {} as UserProfileData
}

export type ProfilePageType = typeof initialState

export type PostDataType = {
  id: string
  text: string
  likesCount: number
}

export type UserProfileData = {
  aboutMe: null | string
  contacts: ContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: null | string
  fullName: string
  userId: number
  photos: PhotosType
}

type PhotosType = {
  small: null | string
  large: null | string
}

type ContactsType = {
  facebook: null | string
  website: null | string
  vk: null | string
  twitter: null | string
  instagram: null | string
  youtube: null | string
  github: null | string
  mainLink: null
}

export type UpdateTypedPostTextActionType = {
  type: typeof UPDATE_TYPED_POST_TEXT
  newValue: string
}

export type AddPostActionType = {
  type: typeof ADD_POST
}

export type SetCurrentUserProfileActionType = {
  type: typeof SET_CURRENT_USER_PROFILE
  userProfileData: UserProfileData
}

const ADD_POST = "ADD-POST"
const UPDATE_TYPED_POST_TEXT = "UPDATE-TYPED-POST-TEXT"
const SET_CURRENT_USER_PROFILE = "SET_CURRENT_USER_PROFILE"

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      if (state.typedPostText) {
        return { // State deep copy before change and return
          ...state,
          postsData: [...state.postsData, {id: v1(), text: state.typedPostText, likesCount: 0}],
          typedPostText: ""
        }
      }
      return state
    case UPDATE_TYPED_POST_TEXT:
      return {...state, typedPostText: action.newValue}

    case SET_CURRENT_USER_PROFILE:
      return {...state, currentUserProfile: action.userProfileData}

    default:
      return state
  }
}

export const addPost = (): AddPostActionType =>
    ({ type: ADD_POST })

export const updateTypedPostText = (newValue: string): UpdateTypedPostTextActionType =>
    ({ type: UPDATE_TYPED_POST_TEXT, newValue })

export const setCurrentUserProfile = (userProfileData: UserProfileData): SetCurrentUserProfileActionType =>
    ({ type: SET_CURRENT_USER_PROFILE, userProfileData })

export default profileReducer