import React from "react"
import {UserDataType} from "../../redux/users-reducer"
import {UserCard} from "./UserCard"
import {PageTitle} from "../PageTitle/PageTitle"
import {PaginationLink} from "../common/PaginationLink";
import {Loading} from "../common/Loading";
import {LoadingCircle} from "../common/LoadingCircle";

type UsersPropsType = {
  usersData: Array<UserDataType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setUsersFn: (usersData: UserDataType) => void
  setCurrentPageFn: (pageNumber: number) => void
  setTotalUsersCountFn: (usersCount: number) => void
  followFn: (userID: number) => void
  unfollowFn: (userID: number) => void
  onPaginationLinkClick: (pageNumber: number) => void
  usersLoading: boolean
}

export function Users(props: UsersPropsType) {

  const paginationArr = []

  if (props.currentPage <= 3) {
    for (let i = 1; i <= 5; i++) {
      paginationArr.push(i)
    }

  } else if (props.currentPage >= props.totalUsersCount - 2) {
    for (let i = props.totalUsersCount - 4; i <= props.totalUsersCount; i++) {
      paginationArr.push(i)
    }

  } else {
    for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
      paginationArr.push(i)
    }
  }

  return (
      <section className="h-full">

        <PageTitle title="Users"/>

        {props.usersData.length > 0 ?

            <>
              <div className="border-t border-theme-border">
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

              <div className="flex items-center justify-center pt-2 pb-6 sm:pb-5">
                { props.usersLoading && <div className="hidden sm:block mr-3 w-6"/> }

                {
                   paginationArr.map(p => {
                    return <PaginationLink key={p}
                                           active={p === props.currentPage}
                                           onClick={(/*e*/) => {
                                             props.onPaginationLinkClick(p)
                                           }}

                           >
                             {p}
                          </PaginationLink>
                    }
                  )
                }

                { props.usersLoading && <div className="hidden sm:block ml-3 w-6"><LoadingCircle/></div> }
              </div>
            </>

            :

            <Loading borders={"t"}/>

        }

      </section>
  )
}
