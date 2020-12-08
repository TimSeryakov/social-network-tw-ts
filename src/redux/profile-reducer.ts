import {v1} from "uuid";
import {ActionsTypes, DispatchType} from "./store-redux";
import {PROFILE_API} from "../api/api";

const initialState = {
  postsData: [
    {id: v1(), text: "Сбербанк выкупил актрису Зою Бербер и назвал Сбербербер.", likesCount: 29},
    {id: v1(), text: "На всех корпоративах я всегда бесплатно фотографирую своих коллег. А вот удаляю их фотографии уже за деньги.", likesCount: 11    },
    {id: v1(), text: "Ехал в яндекс такси и попал в яндекс пробку...", likesCount: 42},
  ] as PostDataType[], // Array<PostDataType>
  typedPostText: "" as string,
  currentUserProfile: {} as UserProfileDataType,
  isProfileDataFetching: false
}

export type ProfilePageType = typeof initialState

export type PostDataType = {
  id: string
  text: string
  likesCount: number
}

export type UserProfileDataType = {
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


export enum PROFILE {
  ADD_POST = "ADD-POST",
  UPDATE_TYPED_POST_TEXT = "UPDATE-TYPED-POST-TEXT",
  SET_CURRENT_USER_PROFILE = "SET_CURRENT_USER_PROFILE",
  SET_PROFILE_DATA_FETCHING = 'SET_PROFILE_DATA_FETCHING',
}

export type UpdateTypedPostTextActionType = {
  type: typeof PROFILE.UPDATE_TYPED_POST_TEXT
  newValue: string
}

export type AddPostActionType = {
  type: typeof PROFILE.ADD_POST
}

export type SetCurrentUserProfileActionType = {
  type: typeof PROFILE.SET_CURRENT_USER_PROFILE
  userProfileData: UserProfileDataType
}


export type ProfileDataFetchingActionType = {
  type: typeof PROFILE.SET_PROFILE_DATA_FETCHING
  isProfileDataFetching: boolean
}


const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case PROFILE.ADD_POST:
      if (state.typedPostText) {
        return { // State deep copy before change and return
          ...state,
          postsData: [...state.postsData, {id: v1(), text: state.typedPostText, likesCount: 0}],
          typedPostText: ""
        }
      }
      return state
    case PROFILE.UPDATE_TYPED_POST_TEXT:
      return {...state, typedPostText: action.newValue}
    case PROFILE.SET_CURRENT_USER_PROFILE:
      return {...state, currentUserProfile: action.userProfileData}
    case PROFILE.SET_PROFILE_DATA_FETCHING: {
      return {
        ...state,
        isProfileDataFetching: action.isProfileDataFetching
      }
    }
    default:
      return state
  }
}

export const addPost = (): AddPostActionType =>
    ({ type: PROFILE.ADD_POST })

export const updateTypedPostText = (newValue: string): UpdateTypedPostTextActionType =>
    ({ type: PROFILE.UPDATE_TYPED_POST_TEXT, newValue })

export const setCurrentUserProfile = (userProfileData: UserProfileDataType): SetCurrentUserProfileActionType =>
    ({ type: PROFILE.SET_CURRENT_USER_PROFILE, userProfileData })

export const setProfileDataFetching = (isProfileDataFetching: boolean): ProfileDataFetchingActionType =>
    ({ type: PROFILE.SET_PROFILE_DATA_FETCHING, isProfileDataFetching })


export const requestProfileData = (userID: string) => {

  return (dispatch: DispatchType /*, getState: GetStateType*/) => {
    dispatch(setProfileDataFetching(true))

    PROFILE_API.getProfileDataFromServer(userID)
        .then(data => {
          dispatch(setCurrentUserProfile(data))
          dispatch(setProfileDataFetching(false))
        })
  }
}

export default profileReducer