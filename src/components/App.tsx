import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Header} from "./Header/Header";
import {Sidebar} from "./Sidebar/Sidebar";
import {Footer} from "./Footer/Footer";
import {Dialogs, DialogsDataType, MessagesDataType} from "./Dialogs/Dialogs";
import {Profile} from "./Profile/Profile";
import {PostsDataType} from "./Profile/MyPosts/MyPosts";

type PropsType = {
  postsData: Array<PostsDataType>
  dialogsData: Array<DialogsDataType>
  messagesData: Array<MessagesDataType>
}

const App = (props: PropsType) => {
  return (
      <BrowserRouter>
        <div className="container shadow-xl h-full min-h-screen flex flex-col border border-theme-border">

          <Header/>

          <div className="flex flex-auto">
            <Sidebar/>

            <main className="flex-grow bg-theme-bg-primary">
              {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
              <Route path={"/dialogs"} render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
              <Route path={"/profile"} render={() => <Profile postsData={props.postsData}/>}/>
            </main>

          </div>

          <Footer/>

        </div>
      </BrowserRouter>
  )
}

export default App;
