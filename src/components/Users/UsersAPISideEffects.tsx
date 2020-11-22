import React from "react"
import {UserDataType} from "../../redux/users-reducer"
import axios from "axios"
import {Users} from "./Users";

type UsersAPISideEffectsPropsType = {
  usersData: Array<UserDataType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setUsersFn: (usersData: UserDataType) => void
  setCurrentPageFn: (pageNumber: number) => void
  setTotalUsersCountFn: (usersCount: number) => void
  followFn: (userID: number) => void
  unfollowFn: (userID: number) => void
  usersLoading: boolean
  setLoadingFn: (loading: boolean) => void
}

export class UsersAPISideEffects extends React.Component<UsersAPISideEffectsPropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsersFn(response.data.items)
            this.props.setTotalUsersCountFn(response.data.totalCount)
          })
  }

  onPaginationLinkClick = (pageNumber: number) => {
      this.props.setLoadingFn(true)
      this.props.setCurrentPageFn(pageNumber)

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
           .then(response => {
              this.props.setUsersFn(response.data.items)
            })
            .then(() => {
              this.props.setLoadingFn(false)
            })


  }

  render() {

    return <Users usersData={this.props.usersData}
                  pageSize={this.props.pageSize}
                  totalUsersCount={this.props.totalUsersCount}
                  currentPage={this.props.currentPage}
                  setUsersFn={this.props.setUsersFn}
                  setCurrentPageFn={this.props.setCurrentPageFn}
                  setTotalUsersCountFn={this.props.setTotalUsersCountFn}
                  followFn={this.props.followFn}
                  unfollowFn={this.props.unfollowFn}
                  onPaginationLinkClick={this.onPaginationLinkClick}
                  usersLoading={this.props.usersLoading}
           />
  }
}
