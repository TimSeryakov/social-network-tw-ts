import React from "react";
import ReactDOM from "react-dom";
import {store, StoreType} from "./redux/state";
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (props?: StoreType) => {
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

rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)

