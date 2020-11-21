import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionsTypes, StateType} from "../../redux/store-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  UserDataType
} from "../../redux/users-reducer";


// Принимает весь state и возвращает только те данные, которые нам понадобятся в компоненте
const mapStateToProps = (state: StateType) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    }
  }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)