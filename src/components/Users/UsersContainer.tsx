import React from "react"
import {
  setFollow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  setUsersDataFetching,
  setUnfollow,
  UserDataType, setUserFollowStatusFetching
} from "../../redux/users-reducer"
import axios from "axios"
import {Users} from "./Users";
import {RootStateType} from "../../redux/store-redux";
import {connect} from "react-redux";

type UsersContainersPropsType = {
  usersData: UserDataType[] // Array<UserDataType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setUsers: (usersData: UserDataType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (usersCount: number) => void
  setFollow: (userID: number) => void
  setUnfollow: (userID: number) => void
  setUsersDataFetching: (isFetching: boolean) => void
  setUserFollowStatusFetching: (isFetching: boolean) => void
  isUsersDataFetching: boolean
  isUserFollowStatusFetching: boolean
}

const SAMURAI_API = axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      withCredentials: true,
      headers: {'API-KEY': process.env.REACT_APP_SAMURAI_API_KEY}
    }
)

class UsersContainer extends React.Component<UsersContainersPropsType> {

  componentDidMount() {
    this.props.setUsersDataFetching(true)
    SAMURAI_API.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
          })
        .then(() => {
          this.props.setUsersDataFetching(false)
        })
  }

  onPaginationLinkClick = (pageNumber: number) => {
      this.props.setUsersDataFetching(true)
      this.props.setCurrentPage(pageNumber)

    SAMURAI_API.get(`users?page=${pageNumber}&count=${this.props.pageSize}`)
           .then(response => {
              this.props.setUsers(response.data.items)
            })
            .then(() => {
              this.props.setUsersDataFetching(false)
            })


  }

  render() {

    return <Users usersData={this.props.usersData}
                  pageSize={this.props.pageSize}
                  totalUsersCount={this.props.totalUsersCount}
                  currentPage={this.props.currentPage}
                  setUsers={this.props.setUsers}
                  setCurrentPage={this.props.setCurrentPage}
                  setTotalUsersCount={this.props.setTotalUsersCount}
                  setFollow={this.props.setFollow}
                  setUnfollow={this.props.setUnfollow}
                  onPaginationLinkClick={this.onPaginationLinkClick}
                  isUsersDataFetching={this.props.isUsersDataFetching}
                  setUserFollowStatusFetching={this.props.setUserFollowStatusFetching}
                  isUserFollowStatusFetching={this.props.isUserFollowStatusFetching}
           />
  }
}


// Принимает весь state и возвращает только те данные, которые нам понадобятся в компоненте
const mapStateToProps = (state: RootStateType) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isUsersDataFetching: state.usersPage.isUsersDataFetching,
    isUserFollowStatusFetching: state.usersPage.isUserFollowStatusFetching
  }
}

export default connect(mapStateToProps, {
    setFollow,
    setUnfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsersDataFetching,
    setUserFollowStatusFetching
  })(UsersContainer)