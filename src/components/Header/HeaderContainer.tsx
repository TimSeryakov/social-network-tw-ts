import React, {useEffect} from 'react';
import {BordersPropsType} from "../common/utils/parseBordersProps";
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {requestAuthUserData} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store-redux";

type HeaderContainerPropsType ={
  borders: BordersPropsType
}

function HeaderContainer(props: HeaderContainerPropsType) {
  const {userID, isAuth, login : userLogin, isAuthDataFetching} = useSelector((state: RootStateType) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
      if (!userID) dispatch(requestAuthUserData())
  }, [userID, dispatch])

  return (
      <Header borders={props.borders}
              isAuth={isAuth}
              userLogin={userLogin}
              isAuthDataFetching={isAuthDataFetching}
      />
  )
}



export default HeaderContainer