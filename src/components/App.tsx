import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from "./Header/Header";
import {Sidebar} from "./Sidebar/Sidebar";
import {Footer} from "./Footer/Footer";
import {Dialogs} from "./Dialogs/Dialogs";
import {Profile} from "./Profile/Profile";
import {RootStateType} from "../redux/state";

type PropsType = {
  state: RootStateType
  addPostCallback: () => void
  updateTypedPostTextCallback: (newValue: string) => void

}

function App (props: PropsType) {
  return (
        <div className="container shadow-xl h-full min-h-screen flex flex-col border border-theme-border">

          <Header borders="b"/>

          <div className="flex flex-auto">

            <Sidebar borders="r"/>

            <main className="flex-grow bg-theme-bg-primary">
              {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
              <Route path={"/dialogs"} render={() =>
                  <Dialogs state={props.state.dialogsPage}/>}/>
              <Route path={"/profile"} render={() =>
                  <Profile profilePage={props.state.profilePage} addPostCallback={props.addPostCallback} updateTypedPostTextCallback={props.updateTypedPostTextCallback}/>}/>
            </main>

          </div>

          <Footer borders="t"/>

        </div>
  )
}

export default App;
