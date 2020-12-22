import React, {useEffect} from 'react';
import {BordersPropsType} from "../common/helpers/parseBordersProps";
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {logout, requestAuthUserData} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store-redux";
import {Redirect} from "react-router-dom";

type HeaderContainerPropsType = {
    borders: BordersPropsType
}

function HeaderContainer(props: HeaderContainerPropsType) {
    const {userID, isAuth, login: userLogin, isAuthDataFetching} = useSelector((state: RootStateType) => state.auth)
    const dispatch = useDispatch()
    const logoutFn = () => {
        dispatch(logout())
        return <Redirect to={"/login"}/>
    }


    useEffect(() => {
        if (!userID) dispatch(requestAuthUserData())
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