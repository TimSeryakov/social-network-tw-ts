import {ActionsTypes, ThunkDispatchType} from "./store-redux";
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
    userID: number | null
    email: string | null
    login: string | null
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
                isAuth: action.isAuth
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
    isAuth: boolean
}

export type AuthDataFetchingActionType = {
    type: typeof AUTH.SET_AUTH_DATA_FETCHING
    isAuthDataFetching: boolean
}

export const setAuthUserData = (userAuthData: UserAuthDataType, isAuth: boolean): SetUserDataActionType =>
    ({type: AUTH.SET_USER_DATA, userAuthData, isAuth})

export const setAuthDataFetching = (isAuthDataFetching: boolean): AuthDataFetchingActionType =>
    ({type: AUTH.SET_AUTH_DATA_FETCHING, isAuthDataFetching})


export const requestAuthUserData = (): ThunkDispatchType => (dispatch/*, getState*/) => {
    dispatch(setAuthDataFetching(true))

    AUTH_API.me()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data, true))
                dispatch(setAuthDataFetching(false))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkDispatchType => (dispatch/*, getState*/) => {
    dispatch(setAuthDataFetching(true))

    AUTH_API.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(requestAuthUserData())
                dispatch(setAuthDataFetching(false))
            }
        })
}

export const logout = (): ThunkDispatchType => (dispatch/*, getState*/) => {
    dispatch(setAuthDataFetching(true))
    AUTH_API.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData({ email: null, login: null, userID: null }, false))
                dispatch(setAuthDataFetching(false))
            }
        })
}


export default authReducer


