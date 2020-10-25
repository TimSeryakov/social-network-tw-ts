import React from "react";
import ReactDOM from "react-dom";
import {store} from "./redux/store";
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = () => {
  ReactDOM.render(
      <BrowserRouter>
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)} // WARNING помнить про .bind
        />
      </BrowserRouter>,
      document.getElementById('root')
  );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)

