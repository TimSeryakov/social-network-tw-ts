import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setCurrentUserProfile, UserProfileData} from "../../redux/profile-reducer";
import {StateType} from '../../redux/store-redux';


type ProfileContainerPropsType = {
  setCurrentUserProfile: (userProfile: UserProfileData) => void
  profileData: UserProfileData
}

const SAMURAI_API = axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      withCredentials: true,
      headers: {'API-KEY': process.env.REACT_APP_SAMURAI_API_KEY}
    }
)

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  componentDidMount() {
      SAMURAI_API.get(`profile/2`)
          .then(response => {
            this.props.setCurrentUserProfile(response.data)
          })
    }

  render() {
    return (
            <Profile {...this.props} profileData={this.props.profileData}/>
    )
  }
}

const mapStateToProps = (state: StateType) => ({
  profileData: state.profilePage.currentUserProfile
})


export default connect(mapStateToProps, {setCurrentUserProfile})(ProfileContainer)