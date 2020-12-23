import {ActionsTypes, ThunkDispatchType} from "./store-redux";
import {AUTH_API} from "../api/api";

// ---------------------------------------------------------------------------------------------------------------------
// Init State
// ---------------------------------------------------------------------------------------------------------------------

const initialState: AuthStateType = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    isAuthDataFetching: false,
    serverErrorMessages: null
}

// ---------------------------------------------------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------------------------------------------------

export type AuthStateType = {
    userID: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isAuthDataFetching: boolean
    serverErrorMessages: string[] | null
}

export type UserAuthDataType = {
    userID: number | null
    email: string | null
    login: string | null
}

// ---------------------------------------------------------------------------------------------------------------------
// Enum (const)
// ---------------------------------------------------------------------------------------------------------------------

export enum AUTH {
    SET_USER_DATA = 'SET_USER_DATA',
    SET_AUTH_DATA_FETCHING = 'SET_AUTH_DATA_FETCHING',
    SET_AUTH_SERVER_ERRORS = 'SET_AUTH_SERVER_ERRORS'
}

// ---------------------------------------------------------------------------------------------------------------------
// Action Creators Types
// ---------------------------------------------------------------------------------------------------------------------

export type SetUserDataActionType = {
    type: typeof AUTH.SET_USER_DATA
    userAuthData: UserAuthDataType
    isAuth: boolean
}

export type SetAuthDataFetchingActionType = {
    type: typeof AUTH.SET_AUTH_DATA_FETCHING
    isAuthDataFetching: boolean
}

export type SetAuthServerErrorActionType = {
    type: typeof AUTH.SET_AUTH_SERVER_ERRORS
    serverErrorMessages: string[]
}

// ---------------------------------------------------------------------------------------------------------------------
// Reducer
// ---------------------------------------------------------------------------------------------------------------------

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
        case AUTH.SET_AUTH_SERVER_ERRORS: {
            return {
                ...state,
                serverErrorMessages: action.serverErrorMessages
            }
        }
        default:
            return state
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// Action Creators
// ---------------------------------------------------------------------------------------------------------------------

export const setAuthUserData = (userAuthData: UserAuthDataType, isAuth: boolean): SetUserDataActionType =>
    ({ type: AUTH.SET_USER_DATA, userAuthData, isAuth })

export const setAuthDataFetching = (isAuthDataFetching: boolean): SetAuthDataFetchingActionType =>
    ({ type: AUTH.SET_AUTH_DATA_FETCHING, isAuthDataFetching })

export const setAuthServerErrors = (serverErrorMessages: string[]): SetAuthServerErrorActionType =>
    ({ type: AUTH.SET_AUTH_SERVER_ERRORS, serverErrorMessages })


// ---------------------------------------------------------------------------------------------------------------------
// Thunk Creators
// ---------------------------------------------------------------------------------------------------------------------

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
            } else {
                dispatch(setAuthServerErrors(data.messages))
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


