import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {
    requestProfileDataTC,
    requestProfileUserStatusTC,
    setCurrentUserProfileAC,
    updateProfileUserStatusTC,
    UserProfileDataType
} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

const LOCAL_USER = 12409

type PathParamsType = {
    userID: string,
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType>

export function ProfileContainer(props: ProfileContainerPropsType) {
    const {
        currentUserProfile,
        isProfileDataFetching,
        userProfileStatus
    } = useSelector((state: RootStateType) => state.profilePage)
    const {isAuth} = useSelector((state: RootStateType) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        let userID: string
        if (!props.match.params.userID) {
            userID = String(LOCAL_USER)
            // if (!userID) {
            //     history.push("/login")
            // }
        } else {
            userID = props.match.params.userID
        }

        dispatch(requestProfileDataTC(userID))
        dispatch(requestProfileUserStatusTC(userID))

    }, [props.match.params.userID, dispatch])


    const setCurrentUserProfileFn = (userProfile: UserProfileDataType) => {
        dispatch(setCurrentUserProfileAC(userProfile))
    }

    const updateUserStatus = (userProfileStatus: string) => {
        dispatch(updateProfileUserStatusTC(userProfileStatus))
    }


    return <Profile
        {...props}
        profileData={currentUserProfile}
        setCurrentUserProfile={setCurrentUserProfileFn}
        isProfileDataFetching={isProfileDataFetching}
        userStatus={userProfileStatus}
        updateUserStatus={updateUserStatus}
        isAuth={isAuth}
    />
}


export default compose<React.ComponentType>(
    withAuthRedirect,
    withRouter
)(ProfileContainer)