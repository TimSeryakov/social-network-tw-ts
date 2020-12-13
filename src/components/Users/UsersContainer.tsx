import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../redux/store-redux";
import {follow, requestUsers, unFollow} from "../../redux/users-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

function UsersContainer() {

    const {
        usersData,
        pageSize,
        totalUsersCount,
        currentPage,
        isUsersDataFetching,
        isUserFollowStatusFetching
    } = useSelector((state: RootStateType) => state.usersPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize))
    }, [currentPage, pageSize, dispatch]) // указывать dispatch чтобы не ругался, хотя он и не может измениться

    const onPaginationLinkClick = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize))
    }

    const followFn = (userID: number) => {
        dispatch(follow(userID))
    }

    const unFollowFn = (userID: number) => {
        dispatch(unFollow(userID))
    }

    return <Users usersData={usersData}
                  totalUsersCount={totalUsersCount}
                  currentPage={currentPage}
                  onPaginationLinkClick={onPaginationLinkClick}
                  isUsersDataFetching={isUsersDataFetching}
                  isUserFollowStatusFetching={isUserFollowStatusFetching}
                  follow={followFn}
                  unFollow={unFollowFn}
    />
}

export default compose(withAuthRedirect)(UsersContainer)

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