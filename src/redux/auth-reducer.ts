import {ActionsTypes, DispatchType} from "./store-redux";
import {AUTH_API} from "../api/api";

const initialState: AuthStateType = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  isAuthDataFetching: false
}

export type AuthStateType = {
  userID: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  isAuthDataFetching: boolean
}


export type UserAuthDataType = {
  userID: number
  email: string
  login: string
}


export enum AUTH {
  SET_USER_DATA = 'SET_USER_DATA',
  SET_AUTH_DATA_FETCHING = 'SET_AUTH_DATA_FETCHING'
}


const authReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
  switch (action.type) {
    case AUTH.SET_USER_DATA: {
      return {
        ...state,
        ...action.userAuthData,
        isAuth: true
      }
    }
    case AUTH.SET_AUTH_DATA_FETCHING: {
      return {
        ...state,
        isAuthDataFetching: action.isAuthDataFetching
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

export type AuthDataFetchingActionType = {
  type: typeof AUTH.SET_AUTH_DATA_FETCHING
  isAuthDataFetching: boolean
}

export const setAuthUserData = (userAuthData: UserAuthDataType): SetUserDataActionType =>
    ({ type: AUTH.SET_USER_DATA, userAuthData })

export const setAuthDataFetching = (isAuthDataFetching: boolean): AuthDataFetchingActionType =>
    ({ type: AUTH.SET_AUTH_DATA_FETCHING, isAuthDataFetching })


export const requestAuthUserData = () => {

  return (dispatch: DispatchType /*, getState: GetStateType*/) => {
    dispatch(setAuthDataFetching(true))

    AUTH_API.getAuthDataFromServer()
        .then(data => {
          if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data))
            dispatch(setAuthDataFetching(false))
          }
        })
  }
}


export default authReducer


