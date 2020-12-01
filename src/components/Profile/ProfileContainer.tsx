import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getProfileDataFromServer} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {setCurrentUserProfile, setProfileDataFetching, UserProfileDataType} from "../../redux/profile-reducer";

type PathParamsType = {
  userID: string,
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType>

export function ProfileContainer(props: ProfileContainerPropsType) {

  const {currentUserProfile, isProfileDataFetching} = useSelector((state: RootStateType) => state.profilePage)
  const dispatch = useDispatch()

  useEffect(() => {
    let userID: string
    if (!props.match.params.userID) {
      userID = String(12409)
    } else {
      userID = props.match.params.userID
    }

    dispatch(setProfileDataFetching(true))
    getProfileDataFromServer(userID)
        .then(data => {
          dispatch(setCurrentUserProfile(data))
          dispatch(setProfileDataFetching(false))
        })
  }, [props.match.params.userID, dispatch])


  const setCurrentUserProfileFn = (userProfile: UserProfileDataType) => {
    dispatch(setCurrentUserProfile(userProfile))
  }

  return <Profile
            {...props}
            profileData={currentUserProfile}
            setCurrentUserProfile={setCurrentUserProfileFn}
            isProfileDataFetching={isProfileDataFetching}
  />
}

export default withRouter(ProfileContainer)