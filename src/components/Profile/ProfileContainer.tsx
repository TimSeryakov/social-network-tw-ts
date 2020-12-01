import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setCurrentUserProfile, UserProfileData} from "../../redux/profile-reducer";
import {RootStateType} from '../../redux/store-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getProfileDataFromServer} from '../../api/api';


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

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  componentDidMount() {
    let userID: string
    if (!this.props.match.params.userID) {
      userID = String(12409)
    } else {
      userID = this.props.match.params.userID
    }

    getProfileDataFromServer(userID)
          .then(data => {
            this.props.setCurrentUserProfile(data)
          })
    }

  render() {
    return <Profile {...this.props} profileData={this.props.profileData}/>
  }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType  => ({
  profileData: state.profilePage.currentUserProfile
})


export default connect(mapStateToProps, {setCurrentUserProfile})(withRouter(ProfileContainer))