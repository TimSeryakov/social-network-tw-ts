import React from 'react';
import './../../styles/index.css'
import './../App.css'
import {Sidebar} from "./Sidebar";
import {BrowserRouter} from "react-router-dom";


export default {
  title: 'Sidebar',
  component: Sidebar,
};


export const SidebarSection = () => <BrowserRouter><Sidebar borders="trl"/></BrowserRouter>
