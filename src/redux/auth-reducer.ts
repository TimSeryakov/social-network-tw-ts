import {ActionsTypes} from "./store-redux";

const initialState: AuthStateType = {
  userID: null,
  email: null,
  login: null,
  isUsersFetching: false
}

export type AuthStateType = {
  userID: number | null
  email: string | null
  login: string | null
  isUsersFetching: boolean
}


type UserAuthDataType = {
  userID: number
  email: string
  login: string
}


export enum AUTH {
  SET_USER_DATA = 'SET_USER_DATA',
}


const authReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
  switch (action.type) {
    case AUTH.SET_USER_DATA: {
      return {
        ...state,
        ...action.userAuthData
      }
    }

    default:
        return state
  }
}

export type SetUserDataActionType = {
  type: typeof AUTH.SET_USER_DATA
  userAuthData: UserAuthDataType
}

export const setUserData = (userAuthData: UserAuthDataType): SetUserDataActionType =>
    ({ type: AUTH.SET_USER_DATA, userAuthData })



export default authReducer


