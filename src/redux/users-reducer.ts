import {ThunkDispatchType} from "./store-redux";
import {USERS_API} from "../api/api";

// ---------------------------------------------------------------------------------------------------------------------
// Init State
// ---------------------------------------------------------------------------------------------------------------------

const initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 10,
    currentPage: 1,
    isUsersDataFetching: false,
    isUserFollowStatusFetching: []
}

// ---------------------------------------------------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------------------------------------------------

export type UsersPageType = {
    usersData: UserDataType[] // Array<UserDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isUsersDataFetching: boolean
    isUserFollowStatusFetching: number[]
}

export type UserDataType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: UserDataPhotosType
    status: string | null
    followed: boolean
    location: UsersLocationType
}

type UserDataPhotosType = {
    small: string | null
    large: string | null
}

export type UsersLocationType = {
    city: string
    country: string
}

// ---------------------------------------------------------------------------------------------------------------------
// Action Creators Types
// ---------------------------------------------------------------------------------------------------------------------

export type UserActionTypes =
    | ReturnType<typeof setFollow>
    | ReturnType<typeof setUnfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setUsersDataFetching>
    | ReturnType<typeof setUserFollowStatusFetching>

// ---------------------------------------------------------------------------------------------------------------------
// Enum (const)
// ---------------------------------------------------------------------------------------------------------------------

export enum USERS {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    SET_USERS_IS_FETCHING = "SET_USERS_IS_FETCHING",
    SET_USER_FOLLOW_STATUS_IS_FETCHING = "SET_USER_FOLLOW_STATUS_IS_FETCHING"
}

// ---------------------------------------------------------------------------------------------------------------------
// Reducer
// ---------------------------------------------------------------------------------------------------------------------

const usersReducer = (state: UsersPageType = initialState, action: UserActionTypes): UsersPageType => {
    switch (action.type) {
        case USERS.FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case USERS.UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case USERS.SET_USERS:
            return {...state, usersData: [...action.usersData]}
        case USERS.SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}
        case USERS.SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.usersCount}
        case USERS.SET_USERS_IS_FETCHING:
            return {...state, isUsersDataFetching: action.isFetching}
        case USERS.SET_USER_FOLLOW_STATUS_IS_FETCHING:

            return {
                ...state,
                isUserFollowStatusFetching: action.isFetching
                    ? [...state.isUserFollowStatusFetching, action.userID]
                    : state.isUserFollowStatusFetching.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// Action Creators
// ---------------------------------------------------------------------------------------------------------------------

export const setFollow = (userID: number) =>
    ({ type: USERS.FOLLOW, userID }) as const
export const setUnfollow = (userID: number) =>
    ({ type: USERS.UNFOLLOW, userID }) as const
export const setUsers = (usersData: UserDataType[]) =>
    ({ type: USERS.SET_USERS, usersData }) as const
export const setCurrentPage = (pageNumber: number) =>
    ({ type: USERS.SET_CURRENT_PAGE, pageNumber }) as const
export const setTotalUsersCount = (usersCount: number) =>
    ({ type: USERS.SET_TOTAL_USERS_COUNT, usersCount }) as const
export const setUsersDataFetching = (isFetching: boolean) =>
    ({ type: USERS.SET_USERS_IS_FETCHING, isFetching }) as const
export const setUserFollowStatusFetching = (isFetching: boolean, userID: number) =>
    ({ type: USERS.SET_USER_FOLLOW_STATUS_IS_FETCHING, isFetching, userID }) as const

// ---------------------------------------------------------------------------------------------------------------------
// Thunk Creators
// ---------------------------------------------------------------------------------------------------------------------

export const requestUsers = (currentPage: number, pageSize: number): ThunkDispatchType => {

    return (dispatch, /*getState*/) => {
        dispatch(setUsersDataFetching(true))

        USERS_API.getUsersData(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setUsersDataFetching(false))
                dispatch(setCurrentPage(currentPage))
            })
    }
}

export const follow = (userID: number): ThunkDispatchType => {

    return (dispatch, /*getState*/) => {
        dispatch(setUserFollowStatusFetching(true, userID))

        USERS_API.followUser(userID)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setFollow(userID))
                }
                dispatch(setUserFollowStatusFetching(false, userID))
            })
    }
}

export const unFollow = (userID: number): ThunkDispatchType => {

    return (dispatch, /*getState*/) => {
        dispatch(setUserFollowStatusFetching(true, userID))

        USERS_API.unFollowUser(userID)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUnfollow(userID))
                }
                dispatch(setUserFollowStatusFetching(false, userID))
            })
    }
}

export default usersReducer

