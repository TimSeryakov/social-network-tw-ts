import React from "react"
import {UsersLocationType} from "../../redux/users-reducer";
import {BordersPropsType, parseBordersProps} from "../common/utils/parseBordersProps";

type UserCardPropsType = {
  borders: BordersPropsType
  key: string
  id: string
  avatar: string
  followed: boolean
  status: string
  fullName: string
  location: UsersLocationType
  onClickFn: () => void
}

export const UserCard = (props: UserCardPropsType) => {

  const userCardStyle = `${parseBordersProps(props.borders)} mt-3 mb-3 mx-4 flex flex-col pt-5 pb-10 px-4 md:p-0 sm:flex-row md:hover:bg-theme-bg-third`
  const followButtonStyle = `px-4 py-2 w-32 text-white rounded-md bg-theme-accent-alternative focus:outline-none hover:bg-theme-accent-alternative-hover`
  const unFollowButtonStyle = `px-4 py-2 w-32 text-theme-accent-alternative border border-theme-accent-alternative rounded-md focus:outline-none hover:text-theme-accent-alternative-hover hover:border-theme-accent-alternative-hover`
  return (
      <div className={userCardStyle} key={props.key}>
        <div className={"w-full md:w-40 flex items-center justify-center"}>
          <img className={"w-40 h-40 md:w-32 md:h-32 bg-theme-bg-secondary rounded-full border border-theme-border my-1 md:my-3"} src={props.avatar} alt={props.fullName}/>
        </div>
        <div className={"flex-1 py-2 text-center md:text-left"}>
          <h3 className={"text-white text-xl"}>{props.fullName}</h3>
          <h4 className={"text-theme-text"}>{props.location.city}, {props.location.country}</h4>
          <div className={"mt-6"}>
            <p className={"text-theme-text"}>
              {props.status}
            </p>
          </div>
        </div>
        <div className={"flex items-center justify-center w-full pt-8 md:w-48 text-center md:text-left"}>
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