import {ActionsTypes} from "./store-redux";

const initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 10,
  currentPage: 1
}

export type UsersPageType = {
  usersData: Array<UserDataType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
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

export type FollowActionType = {
  type: typeof FOLLOW
  userID: number
}

export type UnfollowActionType = {
  type: typeof UNFOLLOW
  userID: number
}

export type SetUsersDataActionType = {
  type: typeof SET_USERS
  usersData: any
}

export type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  pageNumber: number
}

export type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  usersCount: number
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userID) {
            return {...u, followed: true}
          }
          return u
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userID) {
            return {...u, followed: false}
          }
          return u
        })
      }

    case SET_USERS:
      return {...state, usersData: [...action.usersData]}

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.pageNumber}

    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.usersCount}

    default:
        return state
  }
}

export const followAC = (userID: number): FollowActionType =>
    ({ type: FOLLOW, userID })
export const unfollowAC = (userID: number): UnfollowActionType =>
    ({ type: UNFOLLOW, userID })
export const setUsersAC = (usersData: UserDataType): SetUsersDataActionType =>
    ({ type: SET_USERS, usersData })
export const setCurrentPageAC = (pageNumber: number): SetCurrentPageActionType =>
    ({ type: SET_CURRENT_PAGE, pageNumber })
export const setTotalUsersCountAC = (usersCount: number): SetTotalUsersCountActionType =>
    ({ type: SET_TOTAL_USERS_COUNT, usersCount })

export default usersReducer




// Одинаковый результат:
// users: state.users.map(u => u)
// users: [...state.users]