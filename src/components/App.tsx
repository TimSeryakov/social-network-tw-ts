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
}

const App = (props: PropsType) => {
  return (
        <div className="container shadow-xl h-full min-h-screen flex flex-col border border-theme-border">

          <Header/>

          <div className="flex flex-auto">

            <Sidebar/>

            <main className="flex-grow bg-theme-bg-primary">
              {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
              <Route path={"/dialogs"} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
              <Route path={"/profile"} render={() => <Profile state={props.state.profilePage}/>}/>
            </main>

          </div>

          <Footer/>

        </div>
  )
}

export default App;
