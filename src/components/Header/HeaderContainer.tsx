import React from 'react';
import {BordersPropsType} from "../common/utils/parseBordersProps";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthDataFetching, setAuthUserData, UserAuthDataType} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store-redux";

type HeaderContainerPropsType ={
  borders: BordersPropsType
  setAuthUserData: (userAuthData: UserAuthDataType) => void
  setAuthDataFetching: (isAuthDataFetching: boolean) => void
  isAuth: boolean
  userLogin: string
  isAuthDataFetching: boolean
}

const SAMURAI_API = axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      withCredentials: true,
      headers: {'API-KEY': process.env.REACT_APP_SAMURAI_API_KEY}
    }
)

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

  componentDidMount() {
    this.props.setAuthDataFetching(true)
    SAMURAI_API.get(`auth/me`)
        .then(response => {
          if (response.data.resultCode === 0) {
            this.props.setAuthUserData(response.data.data)
          }
        })
        .then(() => {
          this.props.setAuthDataFetching(false)
        })

  }

  render() {
    return (
      <Header borders={this.props.borders}
              isAuth={this.props.isAuth}
              userLogin={this.props.userLogin}
              isAuthDataFetching={this.props.isAuthDataFetching}
        />
    )
  }
}


const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.auth.isAuth,
  userLogin: state.auth.login,
  isAuthDataFetching: state.auth.isAuthDataFetching
})



export default connect(mapStateToProps, {setAuthUserData, setAuthDataFetching})(HeaderContainer)