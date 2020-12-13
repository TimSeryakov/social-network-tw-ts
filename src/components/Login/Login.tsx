import React from 'react'
import {Field, reduxForm} from "redux-form";

export const Login = () => {
    return (
        <section className="w-64 mx-auto mt-10 md:mt-24">
            <LoginReduxForm/>
        </section>
    )
}

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label className="block">
                <span className="text-gray-700 text-xl">Login</span>
                <Field component="input" name="login"
                    className="form-input text-white mt-1 block w-full bg-theme-bg-third border border-theme-border"/>
            </label>

            <label className="block mt-5">
                <span className="text-gray-700 text-xl">Password</span>
                <Field component="input" name="password"
                    className="form-input text-white mt-1 block w-full bg-theme-bg-third border border-theme-border"/>
            </label>

            <div className="flex mt-6">
                <label className="flex items-center">
                    <Field component="input" name="toRemember"
                           type="checkbox" className="form-checkbox bg-theme-bg-third border border-theme-border"/>
                    <span className="ml-2 text-theme-text">Remember me</span>
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
    )
}

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)