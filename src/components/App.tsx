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
      <div className="container h-full min-h-screen flex flex-col bg-blue-100">

        <Header/>

        <div className="flex bg-red-400 flex-auto">
          <Sidebar/>

          <main className="flex-grow bg-gray-500">
            <Route path={"/dialogs"} component={Dialogs}/>
            <Route path={"/profile"} render={() => <Profile/>}/>
          </main>

        </div>

        <Footer/>

      </div>
    </BrowserRouter>
)

export default App;
