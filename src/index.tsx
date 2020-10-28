import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store-redux";


export const rerenderEntireTree = () => {
  ReactDOM.render(
      <BrowserRouter>
        <App
            state={store.getState()}
            store={store}
            dispatch={store.dispatch.bind(store)} // WARNING помнить про .bind
        />
      </BrowserRouter>,
      document.getElementById('root')
  );
}

rerenderEntireTree()
store.subscribe(() => {rerenderEntireTree()})

