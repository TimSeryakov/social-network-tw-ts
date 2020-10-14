import * as serviceWorker from './serviceWorker';
import {addPost, state, subscribe, updateTypedPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import React from "react";



export const rerenderEntireTree = () => { // props: RootStateType
  ReactDOM.render(
      <BrowserRouter>
        <App state={state} addPostCallback={addPost} updateTypedPostTextCallback={updateTypedPostText}/>
      </BrowserRouter>,
      document.getElementById('root')
  );
}
 rerenderEntireTree()
  subscribe(rerenderEntireTree)



serviceWorker.unregister();
