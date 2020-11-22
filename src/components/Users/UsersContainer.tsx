import React from "react"
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC, setUsersFetchingAC,
  unfollowAC,
  UserDataType
} from "../../redux/users-reducer"
import axios from "axios"
import {Users} from "./Users";
import {ActionsTypes, StateType} from "../../redux/store-redux";
import {connect} from "react-redux";

type UsersContainersPropsType = {
  usersData: Array<UserDataType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setUsers: (usersData: UserDataType) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (usersCount: number) => void
  followFn: (userID: number) => void
  unfollowFn: (userID: number) => void
  setFetching: (isFetching: boolean) => void
  isFetching: boolean
}

const SAMURAI_API = axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      withCredentials: true,
      headers: {'API-KEY': 'a8759703-3778-4991-8eb8-854329d491d1'}
    }
)

class UsersContainer extends React.Component<UsersContainersPropsType> {

  componentDidMount() {
    this.props.setFetching(true)
    SAMURAI_API.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
          })
        .then(() => {
          this.props.setFetching(false)
        })

  }

  onPaginationLinkClick = (pageNumber: number) => {
      this.props.setFetching(true)
      this.props.setCurrentPage(pageNumber)

    SAMURAI_API.get(`users?page=${pageNumber}&count=${this.props.pageSize}`)
           .then(response => {
              this.props.setUsers(response.data.items)
            })
            .then(() => {
              this.props.setFetching(false)
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
                  followFn={this.props.followFn}
                  unfollowFn={this.props.unfollowFn}
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
    isFetching: state.usersPage.isFetching
  }
}

const mapDispatchToProps = (dispatch: (actions: ActionsTypes) => void) => {
  return {
    followFn: (userID: number) => {
      dispatch(followAC(userID))
    },
    unfollowFn: (userID: number) => {
      dispatch(unfollowAC(userID))
    },
    setUsers: (usersData: UserDataType) => {
      dispatch(setUsersAC(usersData))
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (usersCount: number) => {
      dispatch(setTotalUsersCountAC(usersCount))
    },
    setFetching: (isFetching: boolean) => {
      dispatch(setUsersFetchingAC(isFetching))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)