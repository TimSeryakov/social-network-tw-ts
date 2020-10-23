import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from "./Header/Header";
import {AsideMenu} from "./Sidebar/AsideMenu";
import {Footer} from "./Footer/Footer";
import {Dialogs} from "./Dialogs/Dialogs";
import {Profile} from "./Profile/Profile";
import {ActionsTypes, StateType} from "../redux/state";

type AppPropsType = {
  state: StateType
  dispatch: (action: ActionsTypes) => void
}

function App (props: AppPropsType) {
  return (
        <div className="container shadow-xl h-full min-h-screen flex flex-col border border-theme-border">

          <Header borders="b"/>

          <div className="flex flex-auto">

            <AsideMenu borders="r"/>

            <main className="flex-grow bg-theme-bg-primary">
              {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
              <Route path={"/dialogs"} render={() =>
                  <Dialogs state={props.state.dialogsPage}
                           dispatch={props.dispatch}
                  />}/>
              <Route path={"/profile"} render={() =>
                  <Profile profilePage={props.state.profilePage}
                           dispatch={props.dispatch}
                  />}
              />
            </main>

          </div>

          <Footer borders="t"/>

        </div>
  )
}

export default App;
