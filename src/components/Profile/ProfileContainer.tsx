import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {requestProfileData, setCurrentUserProfile, UserProfileDataType} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

const LOCAL_USER = 12409

type PathParamsType = {
  userID: string,
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType>

export function ProfileContainer(props: ProfileContainerPropsType) {

  const {currentUserProfile, isProfileDataFetching} = useSelector((state: RootStateType) => state.profilePage)
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

  }, [props.match.params.userID, dispatch])


  const setCurrentUserProfileFn = (userProfile: UserProfileDataType) => {
    dispatch(setCurrentUserProfile(userProfile))
  }


  return <Profile
            {...props}
            profileData={currentUserProfile}
            setCurrentUserProfile={setCurrentUserProfileFn}
            isProfileDataFetching={isProfileDataFetching}
            isAuth={isAuth}
  />
}

const WithAuthProfileContainer = withAuthRedirect(ProfileContainer)

export default withRouter(WithAuthProfileContainer)