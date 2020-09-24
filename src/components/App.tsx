import React, {FC} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Header} from "./Header/Header";
import {Sidebar} from "./Sidebar/Sidebar";
import {Footer} from "./Footer/Footer";
import {Dialogs} from "./Dialogs/Dialogs";
import {Profile} from "./Profile/Profile";


const App: FC = () => (
    <BrowserRouter>
      <div className="container shadow-xl h-full min-h-screen flex flex-col border border-theme-border">

        <Header/>

        <div className="flex flex-auto">
          <Sidebar/>

          <main className="flex-grow bg-theme-bg-primary">
            <Route path={"/dialogs"} component={Dialogs}/>
            <Route path={"/profile"} render={() => <Profile/>}/>
          </main>

        </div>

        <Footer/>

      </div>
    </BrowserRouter>
)

export default App;
