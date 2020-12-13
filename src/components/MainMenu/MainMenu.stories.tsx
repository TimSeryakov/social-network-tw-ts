import React from 'react';
import './../../styles/index.css'
import './../App.css'
import {MainMenu} from "./MainMenu";
import {BrowserRouter} from "react-router-dom";


export default {
    title: 'AsideMenu',
    component: MainMenu,
};


export const sideMenu = () => <BrowserRouter><MainMenu borders="trl"/></BrowserRouter>
