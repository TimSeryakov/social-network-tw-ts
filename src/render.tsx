import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {addPost, RootStateType, state} from './redux/state'
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (props: RootStateType) => {
  ReactDOM.render(
      <BrowserRouter>
        <App state={state} addPostCallback={addPost}/>
      </BrowserRouter>,
      document.getElementById('root')
  );
}


serviceWorker.unregister();
