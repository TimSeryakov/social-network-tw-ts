import React from "react"
import {UserDataType} from "../../redux/users-reducer"
import {UserCard} from "./UserCard"
import {PageTitle} from "../common/PageTitle"
import {PaginationLink} from "../common/PaginationLink";
import {Preloader} from "../common/Preloader";
import {PreloaderCircle} from "../common/PreloaderCircle";
import axios from "axios";

const SAMURAI_API = axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      withCredentials: true,
      headers: {'API-KEY': process.env.REACT_APP_SAMURAI_API_KEY}
    }
)


type UsersPropsType = {
  usersData: UserDataType[] // Array<UserDataType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setUsers: (usersData: UserDataType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (usersCount: number) => void
  setFollow: (userID: number) => void
  setUnfollow: (userID: number) => void
  onPaginationLinkClick: (pageNumber: number) => void
  isUsersDataFetching: boolean
  setUserFollowStatusFetching: (isFetching: boolean) => void
  isUserFollowStatusFetching: boolean
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

        <PageTitle title="Users" isFetching={props.isUserFollowStatusFetching}/>

        {
          props.usersData.length > 0 ?

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
                                onClickFn={
                                  u.followed ?
                                      () => {
                                              props.setUserFollowStatusFetching(true)
                                              SAMURAI_API.delete(`follow/${u.id}`)
                                                  .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                      props.setUnfollow(u.id)
                                                    }
                                                  })
                                                  .then(() => {
                                                    props.setUserFollowStatusFetching(false)
                                                  })
                                            }

                                      :

                                      () => {
                                              props.setUserFollowStatusFetching(true)
                                              SAMURAI_API.post(`follow/${u.id}`)
                                                  .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                      props.setFollow(u.id)
                                                    }
                                                  })
                                                  .then(() => {
                                                    props.setUserFollowStatusFetching(false)
                                                  })
                                            }
                                }
                      />)
                }
              </div>

              <div className="flex items-center justify-center pt-2 pb-6 sm:pb-5">
                { props.isUsersDataFetching && <div className="hidden sm:block mr-3 w-6"/> } {/* для симметрии */}

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

                { props.isUsersDataFetching && <div className="hidden sm:block ml-3 w-6"> <PreloaderCircle/> </div> }
              </div>
            </>

            :

            <Preloader borders="t"/>

        }

      </section>
  )
}
