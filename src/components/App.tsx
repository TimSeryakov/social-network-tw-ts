import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import {MainMenu} from "./MainMenu/MainMenu"
import {Footer} from "./Footer/Footer"
import DialogsContainer from './Dialogs/DialogsContainer'
import UsersContainer from "./Users/UsersContainer"
import ProfileContainer from "./Profile/ProfileContainer"
import HeaderContainer from './Header/HeaderContainer'
import {Login} from './Login/Login'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../redux/store-redux";
import {Preloader} from "./common/Preloader";
import {initializeAppTC} from '../redux/app-reducer'


const App = () => {
    const { initialized } = useSelector((state: RootStateType) => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

    if (!initialized) {
        return (
            <div className="w-full h-screen bg-theme-bg-primary grid place-content-center">
                <Preloader message="Loading..."/>
            </div>
        )
    }

    return (
        <div className="container shadow-xl h-full min-h-screen flex flex-col border border-theme-border">
            <HeaderContainer borders="b"/>
            <div className="flex flex-auto">
                <MainMenu borders="r"/>
                <main className="flex-grow bg-theme-bg-primary">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </main>
            </div>
            <Footer borders="t"/>
        </div>
    )
}

export default App