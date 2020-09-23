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
      <div className="">
        <Header/>
        <div className="container flex min-h-full bg-red-400">
          <Sidebar/>

          <main className="flex-grow bg-gray-700">
            <Route path={"/messages"} component={Dialogs}/>
            <Route path={"/profile"} component={Profile}/>
          </main>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
)

export default App;
