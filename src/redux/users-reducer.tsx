import {ActionsTypes} from "./store-redux";
import {v1} from "uuid";

const initialState = {
  usersData: [
    {id: v1(), avatar: "https://avatarfiles.alphacoders.com/259/thumb-1920-25909.png", followed: true, fullName: "Asya", status: "Change the world by being yourself. 💪", location: {city: "Minsk", country: "Belarus"}},
    {id: v1(), avatar: "https://avatarfiles.alphacoders.com/699/thumb-1920-69905.png", followed: false, fullName: "Kira", status: "‍🚀 Хочу на курсы повышения зарплаты!", location: {city: "Moscow", country: "Russia"}},
    {id: v1(), avatar: "https://avatarfiles.alphacoders.com/832/thumb-1920-83296.png", followed: true, fullName: "Nata", status: "У меня есть изюминка. У меня много изюминок. Я практически кекс. 🎂", location: {city: "Kiev", country: "Ukraine"}},
  ] as Array<UserDataType>
}

export type UsersPageType = typeof initialState

export type UserDataType = {
  id: string
  avatar: string
  followed: boolean
  status: string
  fullName: string
  location: UsersLocationType
}

export type UsersLocationType = {
  city: string
  country: string
}

export type FollowActionType = {
  type: typeof FOLLOW
  userID: string
}

export type UnfollowActionType = {
  type: typeof UNFOLLOW
  userID: string
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


export const followAC = (userID: string): FollowActionType =>
    ({type: FOLLOW, userID: userID})
export const unfollowAC = (userID: string): UnfollowActionType =>
    ({type: UNFOLLOW, userID: userID})
export const setUsers = (usersData: any): SetUsersDataActionType =>
    ({type: SET_USERS, usersData: usersData})

export default usersReducer

// users: state.users.map(u => u)
// users: [...state.users]