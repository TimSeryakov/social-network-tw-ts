import React from 'react';
import {NavLink} from "react-router-dom";


export const Sidebar = () => {
  return (
      <aside className="w-56 bg-theme-bg-secondary border-b border-r border-l border-theme-border">
        <ul className="">
          <li className="">
            <NavLink to={"/profile"}
                     className="text-xl text-theme-text block border-l-2 border-theme-bg-secondary hover:text-white py-4 pl-6"
                     activeClassName="text-white bg-theme-bg-primary border-l-2 border-theme-accent">
              <i className="far fa-user mr-3"></i> Profile
            </NavLink>
          </li>
          <li className="">
            <NavLink to={"/dialogs"}
                     className="text-xl text-theme-text block border-l-2 border-theme-bg-secondary hover:text-white py-4 pl-6"
                     activeClassName="text-white bg-theme-bg-primary border-l-2 border-theme-accent">

              <i className="far fa-envelope mr-3"></i> Messages
            </NavLink>
          </li>
          <li className="">
            <NavLink to={"/news"}
                     className="text-xl text-theme-text block border-l-2 border-theme-bg-secondary hover:text-white py-4 pl-6"
                     activeClassName="text-white bg-theme-bg-primary border-l-2 border-theme-accent">
              <i className="fas fa-asterisk mr-3"></i> News
            </NavLink>
          </li>
          <li className="">
            <NavLink to={"/music"}
                     className="text-xl text-theme-text block border-l-2 border-theme-bg-secondary hover:text-white py-4 pl-6"
                     activeClassName="text-white bg-theme-bg-primary border-l-2 border-theme-accent">
              <i className="fas fa-headphones-alt mr-3"></i> Music
            </NavLink>
          </li>
          <li className="">
            <NavLink to={"/settings"}
                     className="text-xl text-theme-text block border-l-2 border-theme-bg-secondary hover:text-white py-4 pl-6"
                     activeClassName="text-white bg-theme-bg-primary border-l-2 border-theme-accent">
              <i className="fas fa-cog mr-3"></i> Settings
            </NavLink>
          </li>
        </ul>
      </aside>
  )
}