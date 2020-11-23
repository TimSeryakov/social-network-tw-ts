import React from "react"
import {
  setFollow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  setUsersFetching,
  setUnfollow,
  UserDataType
} from "../../redux/users-reducer"
import axios from "axios"
import {Users} from "./Users";
import {StateType} from "../../redux/store-redux";
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
  setUsersFetching: (isFetching: boolean) => void
  isFetching: boolean
}

const SAMURAI_API = axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      withCredentials: true,
      headers: {'API-KEY': process.env.REACT_APP_SAMURAI_API_KEY}
    }
)

class UsersContainer extends React.Component<UsersContainersPropsType> {

  componentDidMount() {
    this.props.setUsersFetching(true)
    SAMURAI_API.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
          })
        .then(() => {
          this.props.setUsersFetching(false)
        })

  }

  onPaginationLinkClick = (pageNumber: number) => {
      this.props.setUsersFetching(true)
      this.props.setCurrentPage(pageNumber)

    SAMURAI_API.get(`users?page=${pageNumber}&count=${this.props.pageSize}`)
           .then(response => {
              this.props.setUsers(response.data.items)
            })
            .then(() => {
              this.props.setUsersFetching(false)
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
                  isFetching={this.props.isFetching}
           />
  }
}


// Принимает весь state и возвращает только те данные, которые нам понадобятся в компоненте
const mapStateToProps = (state: StateType) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isUsersFetching
  }
}

export default connect(mapStateToProps, {
    setFollow,
    setUnfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsersFetching
  })(UsersContainer)