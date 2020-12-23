import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store-redux";
import {Redirect} from 'react-router-dom';
import {SubmitHandler, useForm} from "react-hook-form";

export type LoginFormData = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const { register, handleSubmit, errors } = useForm<LoginFormData>();
    const { isAuth, serverErrorMessages } = useSelector((state: RootStateType) => state.auth)
    const dispatch = useDispatch()


    const onSubmit: SubmitHandler<LoginFormData> = data => {
        dispatch(login(data.email, data.password, data.rememberMe))
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return (
        <section className="w-64 mx-auto mt-10 md:mt-24">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="block">
                    <label className={`${errors.email ? "text-red-400" : "text-gray-700"} text-xl`}>
                        {(!errors.email) && "Email" }
                        {(errors.email && errors.email.type === "required") && errors.email.message }
                        {(errors.email && errors.email.type === "pattern") && errors.email.message }
                    </label>
                    <input name="email"
                           ref={register({ required: "Email is required", pattern: {value: EMAIL_REGEX, message: "Provide a valid email"} })}
                           aria-invalid={errors.email ? "true" : "false"}
                           className="form-input text-white mt-1 block w-full bg-theme-bg-third border border-theme-border"/>
                </label>

                <label className="block mt-5">
                    <label className={`${!errors.password ? "text-gray-700" : "text-red-400"} text-xl`}>
                        {!errors.password ? "Password" : "Password is required"}
                    </label>
                    <input name="password"
                           type="password"
                           ref={register({ required: true })}
                           aria-invalid={errors.password ? "true" : "false"}
                           className="form-input text-white mt-1 block w-full bg-theme-bg-third border border-theme-border"/>
                </label>

                {serverErrorMessages &&
                <div>
                    <p className="text-red-400 mt-5 text-center">{ serverErrorMessages }</p>
                </div>
                }

                <div className="flex mt-6">
                    <label className="flex items-center">
                        <input name="rememberMe"
                               type="checkbox"
                               ref={register}
                               className="form-checkbox bg-theme-bg-third border border-theme-border"/>
                        <label className="ml-2 text-theme-text"> Remember me</label>
                    </label>
                </div>

                <div className="mt-10 flex">
                    <button
                        className="px-4 py-2 text-white rounded-md bg-theme-accent-alternative
                               focus:outline-none focus:shadow-outline mx-auto w-150px
                               hover:bg-theme-accent-alternative-hover
                               hover:border-theme-accent-alternative"
                    >
                        Login
                    </button>
                </div>
            </form>
        </section>
    )
}