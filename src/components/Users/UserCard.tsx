import React from "react"
import {UsersLocationType} from "../../redux/users-reducer"
import {BordersPropsType, parseBordersProps} from "../common/utils/parseBordersProps"
import anonymous from './anonymous-user.png'

type UserCardPropsType = {
  borders: BordersPropsType
  key: string
  id: number
  photo: string | null
  followed: boolean
  status: string | null
  name: string
  location: UsersLocationType
  onClickFn: () => void
}

export const UserCard = (props: UserCardPropsType) => {

  const userCardStyle = `${parseBordersProps(props.borders)} mt-3 mb-3 mx-4 flex flex-col pt-5 pb-8 px-4 sm:p-0 sm:flex-row sm:hover:bg-theme-bg-third`
  const followButtonStyle = `px-4 py-2 w-32 text-white rounded-md border border-theme-accent-alternative bg-theme-accent-alternative focus:outline-none hover:bg-theme-accent-alternative-hover hover:border-theme-accent-alternative`
  const unFollowButtonStyle = `px-4 py-2 w-32 text-theme-accent-alternative border border-theme-accent-alternative rounded-md focus:outline-none hover:text-theme-accent-alternative-hover hover:border-theme-accent-alternative-hover`
  return (
      <div className={userCardStyle} key={props.key}>
        <div className={"w-full sm:w-40 flex items-center justify-center"}>
          <img className={"w-40 h-40 sm:w-32 sm:h-32 bg-theme-bg-secondary rounded-full border border-theme-border my-1 sm:my-3"}
               src={ props.photo ? props.photo : anonymous}
               alt={`Avatar of ${props.name}`}/>
        </div>
        <div className={"flex-1 py-2 text-center sm:text-left"}>
          <h3 className={"text-white text-xl"}>{props.name}</h3>
          <h4 className={"text-theme-text"}>{props.location.city}, {props.location.country}</h4>
          <div className={"mt-6"}>
            <p className={"text-theme-text"}>
              {props.status}
            </p>
          </div>
        </div>
        <div className={"flex items-center justify-center w-full pt-8 sm:w-48 sm:pt-0 text-center sm:text-left"}>
          <button
              className={props.followed ? unFollowButtonStyle : followButtonStyle}
              onClick={props.onClickFn}
          >
            {props.followed ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
  )
}