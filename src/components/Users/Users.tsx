import React from "react"
import {UserDataType} from "../../redux/users-reducer"
import {UserCard} from "./UserCard"
import {PageTitle} from "../PageTitle/PageTitle"
import axios from "axios"

type UsersPropsType = {
  usersData: Array<UserDataType>
  setUsersFn: (usersData: UserDataType) => void
  followFn: (userID: number) => void
  unfollowFn: (userID: number) => void
}

export const Users = (props: UsersPropsType) => {

  const getUsers = () => {
    if (props.usersData.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsersFn(response.data.items)
      })
    }
  }

    return (
        <section>

          <PageTitle title="Profile info"/>

          <div className="border-theme-border border-t">
            {
              props.usersData.map(u =>
                  <UserCard borders={"trbl"}
                            key={u.id.toString()}
                            id={u.id}
                            photo={u.photos.small}
                            followed={u.followed}
                            name={u.name}
                            status={u.status}
                            location={{city: "location.city", country: "location.country"}}
                            onClickFn={u.followed ? () => {
                              props.unfollowFn(u.id)
                            } : () => {
                              props.followFn(u.id)
                            }}
                  />)
            }
          </div>

        </section>
    )
}
