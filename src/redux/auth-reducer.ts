import {ThunkDispatchType} from "./store-redux";
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
// Action Creators Types
// ---------------------------------------------------------------------------------------------------------------------

export type AuthActionTypes =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setAuthDataFetchingAC>
    | ReturnType<typeof setAuthServerErrorsAC>

// ---------------------------------------------------------------------------------------------------------------------
// Enum (const)
// ---------------------------------------------------------------------------------------------------------------------

export enum AUTH {
    SET_USER_DATA = 'SET_USER_DATA',
    SET_AUTH_DATA_FETCHING = 'SET_AUTH_DATA_FETCHING',
    SET_AUTH_SERVER_ERRORS = 'SET_AUTH_SERVER_ERRORS'
}

// ---------------------------------------------------------------------------------------------------------------------
// Reducer
// ---------------------------------------------------------------------------------------------------------------------

const authReducer = (state: AuthStateType = initialState, action: AuthActionTypes): AuthStateType => {
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

export const setAuthUserDataAC = (userAuthData: UserAuthDataType, isAuth: boolean) =>
    ({ type: AUTH.SET_USER_DATA, userAuthData, isAuth } as const)

export const setAuthDataFetchingAC = (isAuthDataFetching: boolean) =>
    ({ type: AUTH.SET_AUTH_DATA_FETCHING, isAuthDataFetching } as const)

export const setAuthServerErrorsAC = (serverErrorMessages: string[]) =>
    ({ type: AUTH.SET_AUTH_SERVER_ERRORS, serverErrorMessages } as const)


// ---------------------------------------------------------------------------------------------------------------------
// Thunk Creators
// ---------------------------------------------------------------------------------------------------------------------

export const requestAuthUserDataTC = (): ThunkDispatchType => (dispatch/*, getState*/) => {
    dispatch(setAuthDataFetchingAC(true))

    AUTH_API.me()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataAC(data.data, true))
                dispatch(setAuthDataFetchingAC(false))
            }
        })
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkDispatchType => (dispatch/*, getState*/) => {

    dispatch(setAuthDataFetchingAC(true))

    AUTH_API.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(requestAuthUserDataTC())
                dispatch(setAuthDataFetchingAC(false))
            } else {
                dispatch(setAuthServerErrorsAC(data.messages))
            }
        })
}

export const logoutTC = (): ThunkDispatchType => (dispatch/*, getState*/) => {
    dispatch(setAuthDataFetchingAC(true))
    AUTH_API.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataAC({ email: null, login: null, userID: null }, false))
                dispatch(setAuthDataFetchingAC(false))
            }
        })
}


export default authReducer


