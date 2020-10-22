import React from 'react';
import './../../styles/index.css'
import './../App.css'
import {AsideMenu} from "./AsideMenu";
import {BrowserRouter} from "react-router-dom";


export default {
  title: 'AsideMenu',
  component: AsideMenu,
};


export const sideMenu = () => <BrowserRouter><AsideMenu borders="trl"/></BrowserRouter>
