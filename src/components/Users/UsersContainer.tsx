import {connect} from "react-redux";
import {ActionsTypes, StateType} from "../../redux/store-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  setUsersLoadingAC,
  unfollowAC,
  UserDataType
} from "../../redux/users-reducer";
import {UsersAPISideEffects} from "./UsersAPISideEffects";


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


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPISideEffects)