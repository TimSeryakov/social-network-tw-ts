import React, {FC} from 'react';
import {Header} from "./Header/Header";
import {Sidebar} from "./Sidebar/Sidebar";
import {Profile} from "./Profile/Profile";
import {Footer} from "./Footer/Footer";
import {Dialogs} from "./Dialogs/Dialogs";

const App: FC = () => (
    <>
      <Header/>
        <div className="container flex h-full bg-red-400">
          <Sidebar/>
          {/*<Profile/>*/}
          <Dialogs/>
        </div>
        <Footer/>
    </>
)

export default App;
