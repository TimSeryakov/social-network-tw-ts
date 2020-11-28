import React, {useEffect} from 'react';
import {BordersPropsType} from "../common/utils/parseBordersProps";
import {Header} from "./Header";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setAuthDataFetching, setAuthUserData} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store-redux";

type HeaderContainerPropsType ={
  borders: BordersPropsType
  // setAuthUserData: (userAuthData: UserAuthDataType) => void
  // setAuthDataFetching: (isAuthDataFetching: boolean) => void
  // isAuth: boolean
  // userLogin: string | null
  // isAuthDataFetching: boolean
}

const SAMURAI_API = axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      withCredentials: true,
      headers: {'API-KEY': process.env.REACT_APP_SAMURAI_API_KEY}
    }
)

function HeaderContainer(props: HeaderContainerPropsType) {
  const {userID, isAuth, login : userLogin, isAuthDataFetching} = useSelector((state: RootStateType) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {

      if (!userID) {
      dispatch(setAuthDataFetching(true))
      SAMURAI_API.get(`auth/me`)
          .then(response => {
            if (response.data.resultCode === 0) {
              dispatch(setAuthUserData(response.data.data))
            }
          })
          .then(() => {
            dispatch(setAuthDataFetching(false))
          })
      }
  }, [userID, dispatch]) // указывать dispatch

  return (
      <Header borders={props.borders}
              isAuth={isAuth}
              userLogin={userLogin}
              isAuthDataFetching={isAuthDataFetching}
      />
  )
}



export default HeaderContainer