import React, {useEffect} from 'react';
import {BordersPropsType} from "../common/utils/parseBordersProps";
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {setAuthDataFetching, setAuthUserData} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store-redux";
import {AUTH_API} from "../../api/api";

type HeaderContainerPropsType ={
  borders: BordersPropsType
}

function HeaderContainer(props: HeaderContainerPropsType) {
  const {userID, isAuth, login : userLogin, isAuthDataFetching} = useSelector((state: RootStateType) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {

      if (!userID) {
        dispatch(setAuthDataFetching(true))
        AUTH_API.getAuthDataFromServer()
          .then(data => {
            if (data.resultCode === 0) {
              dispatch(setAuthUserData(data.data))
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