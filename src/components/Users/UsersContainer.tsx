import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {USERS_API} from "../../api/api";
import {Users} from "./Users";
import {RootStateType} from "../../redux/store-redux";
import {
  setCurrentPage,
  setFollow,
  setTotalUsersCount,
  setUnfollow, setUserFollowStatusFetching,
  setUsers,
  setUsersDataFetching
} from "../../redux/users-reducer";

function UsersContainer() {

  const {usersData, pageSize, totalUsersCount, currentPage, isUsersDataFetching, isUserFollowStatusFetching} = useSelector((state: RootStateType) => state.usersPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUsersDataFetching(true))
    USERS_API.getUsersDataFromServer(currentPage, pageSize)
        .then(data => {
          dispatch(setUsers(data.items))
          dispatch(setTotalUsersCount(data.totalCount))
          dispatch(setUsersDataFetching(false))
        })
  }, [currentPage, pageSize, dispatch]) // указывать dispatch

  const onPaginationLinkClick = (pageNumber: number) => {
    dispatch(setUsersDataFetching(true))
    dispatch(setCurrentPage(pageNumber))

    USERS_API.getUsersDataFromServer(pageNumber, pageSize)
        .then(data => {
          dispatch(setUsers(data.items))
          dispatch(setUsersDataFetching(false))
        })
  }

  const setFollowFn = (userID: number) => {
    dispatch(setFollow(userID))
  }

  const setUnfollowFn = (userID: number) => {
    dispatch(setUnfollow(userID))
  }

  const setUserFollowStatusFetchingFn = (isFetching: boolean) => {
    dispatch(setUserFollowStatusFetching(isFetching))
  }



  return <Users usersData={usersData}
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                currentPage={currentPage}
                setUsers={setUsers}
                setCurrentPage={setCurrentPage}
                setTotalUsersCount={setTotalUsersCount}
                setFollow={setFollowFn}
                setUnfollow={setUnfollowFn}
                onPaginationLinkClick={onPaginationLinkClick}
                isUsersDataFetching={isUsersDataFetching}
                setUserFollowStatusFetching={setUserFollowStatusFetchingFn}
                isUserFollowStatusFetching={isUserFollowStatusFetching}
  />
}

export default UsersContainer

//
// // Принимает весь state и возвращает только те данные, которые нам понадобятся в компоненте
// const mapStateToProps = (state: RootStateType) => {
//   return {
//     usersData: state.usersPage.usersData,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isUsersDataFetching: state.usersPage.isUsersDataFetching,
//     isUserFollowStatusFetching: state.usersPage.isUserFollowStatusFetching
//   }
// }
//
// export default connect(mapStateToProps, {
//     setFollow,
//     setUnfollow,
//     setUsers,
//     setCurrentPage,
//     setTotalUsersCount,
//     setUsersDataFetching,
//     setUserFollowStatusFetching
//   })(UsersContainer)