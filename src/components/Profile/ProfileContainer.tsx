import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setCurrentUserProfile, UserProfileData} from "../../redux/profile-reducer";
import {RootStateType} from '../../redux/store-redux';
import {RouteComponentProps, withRouter } from 'react-router-dom';


type MapDispatchToPropsType = {
  setCurrentUserProfile: (userProfile: UserProfileData) => void
}

type MapStateToPropsType = {
  profileData: UserProfileData
}

type PathParamsType = {
  userID: string,
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>


const SAMURAI_API = axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      withCredentials: true,
      headers: {'API-KEY': process.env.REACT_APP_SAMURAI_API_KEY}
    }
)

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  componentDidMount() {

    let userID: string
    if (!this.props.match.params.userID) {
      userID = String(12409)
    } else {
      userID = this.props.match.params.userID
    }

      SAMURAI_API.get(`profile/${userID}`)
          .then(response => {
            this.props.setCurrentUserProfile(response.data)
          })
    }

  render() {
    return <Profile {...this.props} profileData={this.props.profileData}/>
  }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType  => ({
  profileData: state.profilePage.currentUserProfile
})


// @ts-ignore
export default connect(mapStateToProps, {setCurrentUserProfile})(withRouter(ProfileContainer))