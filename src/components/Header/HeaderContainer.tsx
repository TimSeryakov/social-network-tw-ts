import React, {useEffect} from 'react';
import {BordersPropsType} from "../../helpers/parseBordersProps";
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {logoutTC, requestAuthUserDataTC} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store-redux";
import {Redirect} from "react-router-dom";

type HeaderContainerPropsType = {
    borders: BordersPropsType
}

function HeaderContainer(props: HeaderContainerPropsType) {
    const {userID, isAuth, login: userLogin, isAuthDataFetching} = useSelector((state: RootStateType) => state.auth)
    const dispatch = useDispatch()
    const logoutFn = () => {
        dispatch(logoutTC())
        return <Redirect to={"/login"}/>
    }
    useEffect(() => {
        if (!userID) dispatch(requestAuthUserDataTC())
    }, [userID, dispatch])

    return (
        <Header borders={props.borders}
                isAuth={isAuth}
                userLogin={userLogin}
                isAuthDataFetching={isAuthDataFetching}
                logout={logoutFn}
        />
    )
}


export default HeaderContainer