import React from 'react'
import LoginForm, {FormDataType} from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store-redux";
import { Redirect } from 'react-router-dom';


export const Login = () => {
    const { isAuth } = useSelector((state: RootStateType) => state.auth)
    const dispatch = useDispatch()

    const onSubmit = (formData: FormDataType) => {
        dispatch(loginTC(formData.email, formData.password, formData.rememberMe))
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <section className="w-64 mx-auto mt-10 md:mt-24">
            <LoginForm onSubmit={onSubmit}/>
        </section>
    )
}