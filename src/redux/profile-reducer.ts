import {v1} from "uuid";
import {ThunkDispatchType} from "./store-redux";
import {PROFILE_API} from "../api/api";

// ---------------------------------------------------------------------------------------------------------------------
// Init State
// ---------------------------------------------------------------------------------------------------------------------

const initialState = {
    postsData: [
        {id: v1(), text: "Сбербанк выкупил актрису Зою Бербер и назвал Сбербербер.", likesCount: 29},
        {
            id: v1(),
            text: "На всех корпоративах я всегда бесплатно фотографирую своих коллег. А вот удаляю их фотографии уже за деньги.",
            likesCount: 11
        },
        {id: v1(), text: "Ехал в яндекс такси и попал в яндекс пробку...", likesCount: 42},
    ] as PostDataType[], // Array<PostDataType>
    currentUserProfile: {} as UserProfileDataType,
    userProfileStatus: "",
    isProfileDataFetching: false
}

// ---------------------------------------------------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------
// Action Creators Types
// ---------------------------------------------------------------------------------------------------------------------

export type ProfileActionTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setCurrentUserProfileAC>
    | ReturnType<typeof setProfileDataFetchingAC>
    | ReturnType<typeof getProfileUserStatusAC>
    | ReturnType<typeof setProfileUserStatusAC>

// ---------------------------------------------------------------------------------------------------------------------
// Enum (const)
// ---------------------------------------------------------------------------------------------------------------------

export enum PROFILE {
    ADD_POST = "ADD-POST",
    SET_CURRENT_USER_PROFILE = "SET_CURRENT_USER_PROFILE",
    SET_PROFILE_DATA_FETCHING = 'SET_PROFILE_DATA_FETCHING',
    GET_PROFILE_USER_STATUS = 'GET_PROFILE_USER_STATUS',
    SET_PROFILE_USER_STATUS = 'SET_PROFILE_USER_STATUS',
}
// ---------------------------------------------------------------------------------------------------------------------
// Reducer
// ---------------------------------------------------------------------------------------------------------------------

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionTypes): ProfilePageType => {
    switch (action.type) {
        case PROFILE.ADD_POST:
            return { // State deep copy before change and return
                ...state,
                postsData: [...state.postsData, {id: v1(), text: action.newPost, likesCount: 0}],
            }
        case PROFILE.SET_CURRENT_USER_PROFILE:
            return {...state, currentUserProfile: action.userProfileData}
        case PROFILE.SET_PROFILE_DATA_FETCHING: {
            return {
                ...state,
                isProfileDataFetching: action.isProfileDataFetching
            }
        }
        case PROFILE.SET_PROFILE_USER_STATUS: {
            return {
                ...state,
                userProfileStatus: action.userProfileStatus
            }
        }
        default:
            return state
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// Action Creators
// ---------------------------------------------------------------------------------------------------------------------

export const addPostAC = (newPost: string) =>
    ({ type: PROFILE.ADD_POST, newPost } as const)

export const setCurrentUserProfileAC = (userProfileData: UserProfileDataType) =>
    ({ type: PROFILE.SET_CURRENT_USER_PROFILE, userProfileData } as const)

export const setProfileDataFetchingAC = (isProfileDataFetching: boolean) =>
    ({ type: PROFILE.SET_PROFILE_DATA_FETCHING, isProfileDataFetching } as const)

export const getProfileUserStatusAC = (userID: string) =>
    ({ type: PROFILE.GET_PROFILE_USER_STATUS, userID } as const)

export const setProfileUserStatusAC = (userProfileStatus: string) =>
    ({ type: PROFILE.SET_PROFILE_USER_STATUS, userProfileStatus } as const)

// ---------------------------------------------------------------------------------------------------------------------
// Thunk Creators
// ---------------------------------------------------------------------------------------------------------------------

export const requestProfileDataTC = (userID: string): ThunkDispatchType => (dispatch, /*getState*/) => {
    dispatch(setProfileDataFetchingAC(true))

    PROFILE_API.getProfileData(userID)
        .then(data => {
            dispatch(setCurrentUserProfileAC(data))
            dispatch(setProfileDataFetchingAC(false))
        })
}

export const requestProfileUserStatusTC = (userID: string): ThunkDispatchType => (dispatch, /*getState*/) => {
    dispatch(setProfileDataFetchingAC(true))

    PROFILE_API.getProfileUserStatus(userID)
        .then(data => {
            dispatch(setProfileUserStatusAC(data))
            dispatch(setProfileDataFetchingAC(false))
        })
}

export const updateProfileUserStatusTC = (userProfileStatus: string): ThunkDispatchType => (dispatch, /*getState*/) => {
    dispatch(setProfileDataFetchingAC(true))

    PROFILE_API.updateProfileUserStatus(userProfileStatus) // Изменения на сервере
        .then(data => {
            if (data.resultCode === 0) {
                // если на сервере все OK, то наш меняем наш state согласно успешно отправленным данным
                dispatch(setProfileUserStatusAC(userProfileStatus)) // Изменения в нашем state
            }
            dispatch(setProfileDataFetchingAC(false))
        })
}


export default profileReducer