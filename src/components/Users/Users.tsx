import React from "react"
import {UserDataType} from "../../redux/users-reducer"
import {UserCard} from "./UserCard"
import {PageTitle} from "../common/PageTitle"
import {PaginationLink} from "../common/PaginationLink";
import {Preloader} from "../common/Preloader";
import {PreloaderCircle} from "../common/PreloaderCircle";
import { Redirect } from "react-router-dom";


type UsersPropsType = {
  usersData: UserDataType[] // Array<UserDataType>
  totalUsersCount: number
  currentPage: number
  onPaginationLinkClick: (pageNumber: number) => void
  isUsersDataFetching: boolean
  isUserFollowStatusFetching: number[]
  follow: (userID: number) => void
  unFollow: (userID: number) => void
  isAuth: boolean
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

  if (!props.isAuth) return <Redirect to="/login"/>

  return (
      <section className="h-full">

        <PageTitle title="Users" isFetching={!!props.isUserFollowStatusFetching.length}/>

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
                                isUserFollowStatusFetching={props.isUserFollowStatusFetching}
                                onClickFn={u.followed ?
                                            () => {props.unFollow(u.id)}
                                            :
                                            () => {props.follow(u.id)}
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
