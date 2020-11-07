import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from "./Header/Header";
import {MainMenu} from "./MainMenu/MainMenu";
import {Footer} from "./Footer/Footer";
import {Profile} from "./Profile/Profile";
import {DialogsContainer} from './Dialogs/DialogsContainer';
import {UsersContainer} from "./Users/UsersContainer";


function App() {
  return (
      <div className="container shadow-xl h-full min-h-screen flex flex-col border border-theme-border">

        <Header borders="b"/>

        <div className="flex flex-auto">

          <MainMenu borders="r"/>

          <main className="flex-grow bg-theme-bg-primary">
            <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
            <Route path={"/profile"} render={() => <Profile/>}/>
            <Route path={"/users"} render={() => <UsersContainer/>}/>
          </main>

        </div>

        <Footer borders="t"/>

      </div>
  )
}

export default App

// <Route path={"/dialogs"} component={Dialogs}/>
