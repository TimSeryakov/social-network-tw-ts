import {ActionsTypes} from "./store-redux";

const initialState = {
  usersData: []
}

export type UsersPageType = {
  usersData: Array<UserDataType>
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

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


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
      return {...state, usersData: [...state.usersData, ...action.usersData]}

    default:
        return state
  }
}


export const followAC = (userID: number): FollowActionType =>
    ({type: FOLLOW, userID: userID})
export const unfollowAC = (userID: number): UnfollowActionType =>
    ({type: UNFOLLOW, userID: userID})
export const setUsers = (usersData: any): SetUsersDataActionType =>
    ({type: SET_USERS, usersData: usersData})

export default usersReducer

// users: state.users.map(u => u)
// users: [...state.users]