import React from "react"
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/store-redux";


export const withAuthRedirect = (Component: any) => {

    return (props: any) => {
        const {isAuth} = useSelector((state: RootStateType) => state.auth)

        if (!isAuth) return <Redirect to='/login'/>

        return <Component {...props} />
    }

}

