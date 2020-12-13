import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {
    requestProfileData,
    requestProfileUserStatus,
    setCurrentUserProfile,
    updateProfileUserStatus,
    UserProfileDataType
} from "../../redux/profile-reducer";
import {compose} from "redux";

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
        } else {
            userID = props.match.params.userID
        }

        dispatch(requestProfileData(userID))
        dispatch(requestProfileUserStatus(userID))

    }, [props.match.params.userID, dispatch])


    const setCurrentUserProfileFn = (userProfile: UserProfileDataType) => {
        dispatch(setCurrentUserProfile(userProfile))
    }

    const updateUserStatus = (userProfileStatus: string) => {
        dispatch(updateProfileUserStatus(userProfileStatus))
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
    // withAuthRedirect,
    withRouter
)(ProfileContainer)