import React from "react"
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC, setUsersLoadingAC,
  unfollowAC,
  UserDataType
} from "../../redux/users-reducer"
import axios from "axios"
import {Users} from "./Users";
import {ActionsTypes, StateType} from "../../redux/store-redux";
import {connect} from "react-redux";

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

class UsersContainer extends React.Component<UsersAPISideEffectsPropsType> {

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


// Принимает весь state и возвращает только те данные, которые нам понадобятся в компоненте
const mapStateToProps = (state: StateType) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    usersLoading: state.usersPage.usersLoading
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
    setUsersFn: (usersData: UserDataType) => {
      dispatch(setUsersAC(usersData))
    },
    setCurrentPageFn: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCountFn: (usersCount: number) => {
      dispatch(setTotalUsersCountAC(usersCount))
    },
    setLoadingFn: (loading: boolean) => {
      dispatch(setUsersLoadingAC(loading))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)