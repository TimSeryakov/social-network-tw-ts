import React from "react"
import {UserDataType} from "../../redux/users-reducer";
import {UserCard} from "./UserCard";
import {PageTitle} from "../PageTitle/PageTitle";

type UsersPropsType = {
  usersData: Array<UserDataType>
  followFn: (userID: string) => void
  unfollowFn: (userID: string) => void
}

export const Users = (props: UsersPropsType) => {

  return (
      <section>

        <PageTitle title="Profile info"/>

        <div className="border-theme-border border-t">
          {
            props.usersData.map(u =>
                <UserCard borders={"trbl"} key={u.id} id={u.id} avatar={u.avatar} followed={u.followed}
                          status={u.status}
                          fullName={u.fullName}
                          location={u.location}
                          onClickFn={u.followed ? () => {props.unfollowFn(u.id)} : () => {props.followFn(u.id)}}
                />)
          }
        </div>

      </section>
  )
}
