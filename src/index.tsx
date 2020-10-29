import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store-redux";
import {Provider} from "./redux/store-context";


export const rerenderEntireTree = () => {
  ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </BrowserRouter>,
      document.getElementById('root')
  );
}

rerenderEntireTree()
store.subscribe(() => {rerenderEntireTree()})

