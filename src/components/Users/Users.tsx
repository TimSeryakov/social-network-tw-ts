import React from "react"
import {UserDataType} from "../../redux/users-reducer"
import {UserCard} from "./UserCard"
import {PageTitle} from "../PageTitle/PageTitle"
import axios from "axios"
import {PaginationLink} from "../common/PaginationLink";
import {Loading} from "../common/Loading";

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
}

export class Users extends React.Component<UsersPropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsersFn(response.data.items)
      this.props.setTotalUsersCountFn(response.data.totalCount)
    })
  }

  onPaginationLinkClick = (pageNumber: number) => {
      this.props.setCurrentPageFn(pageNumber)

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsersFn(response.data.items)
    })
  }

  render() {

    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    const pages = []
    const paginationArr = []

    if (this.props.currentPage <= 3) {
      for (let i = 1; i <= 5; i++) { paginationArr.push(i) }

    } else if (this.props.currentPage >= this.props.totalUsersCount - 2) {
      for (let i = this.props.totalUsersCount - 4; i <= this.props.totalUsersCount; i++) { paginationArr.push(i) }

    } else {
      for (let i = this.props.currentPage - 2; i <= this.props.currentPage + 2; i++) { paginationArr.push(i) }
    }



    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
        <section className="h-full">

          <PageTitle title="Users"/>

          { this.props.usersData.length > 0 ?

              <>
                <div className="border-t border-theme-border">
                  {
                    this.props.usersData.map(u =>
                        <UserCard borders={"trbl"}
                                  key={u.id.toString()}
                                  id={u.id}
                                  photo={u.photos.small}
                                  followed={u.followed}
                                  name={u.name}
                                  status={u.status}
                                  location={{city: "location.city", country: "location.country"}}
                                  onClickFn={u.followed ? () => {
                                    this.props.unfollowFn(u.id)
                                  } : () => {
                                    this.props.followFn(u.id)
                                  }}
                        />)
                  }
                </div>

                <div className="flex items-center justify-center pt-2 pb-6 sm:pb-5">

                  { paginationArr.map(p => <PaginationLink key={p}
                                                   active={ p === this.props.currentPage }
                                                   onClick={ (/*e*/) => { this.onPaginationLinkClick(p) } }

                  >
                    {p}
                  </PaginationLink>

                  ) }

                </div>
              </>

              :

              <Loading borders={"t"}/>

          }

        </section>
    )
  }
}
