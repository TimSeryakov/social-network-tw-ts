import React from 'react';
import {NavLink} from "react-router-dom";


export const Sidebar = () => {
  return (
      <aside className="w-56 bg-theme-bg-third border-r border-theme-border">
        <ul className="">
          <li className="border-b border-theme-border">
            <NavLink to={"/profile"}
                     className="text-xl text-theme-text block border-l-2 border-theme-bg-third hover:text-white py-4 pl-6"
                     activeClassName="bg-theme-bg-primary border-l-2 border-theme-accent text-theme-white">
              <i className="far fa-user mr-3"/> Profile
            </NavLink>
          </li>
          <li className="border-b border-theme-border">
            <NavLink to={"/dialogs"}
                     className="text-xl text-theme-text block border-l-2 border-theme-bg-third hover:text-white py-4 pl-6"
                     activeClassName="bg-theme-bg-primary border-l-2 border-theme-accent text-theme-white">

              <i className="far fa-envelope mr-3"/> Messages
            </NavLink>
          </li>
          <li className="border-b border-theme-border">
            <NavLink to={"/news"}
                     className="text-xl text-theme-text block border-l-2 border-theme-bg-third hover:text-white py-4 pl-6"
                     activeClassName="bg-theme-bg-primary border-l-2 border-theme-accent text-theme-white">
              <i className="fas fa-asterisk mr-3"/> News
            </NavLink>
          </li>
          <li className="border-b border-theme-border">
            <NavLink to={"/music"}
                     className="text-xl text-theme-text block border-l-2 border-theme-bg-third hover:text-white py-4 pl-6"
                     activeClassName="bg-theme-bg-primary border-l-2 border-theme-accent text-theme-white">
              <i className="fas fa-headphones-alt mr-3"/> Music
            </NavLink>
          </li>
          <li className="border-b border-theme-border">
            <NavLink to={"/settings"}
                     className="text-xl text-theme-text block border-l-2 border-theme-bg-third hover:text-white py-4 pl-6"
                     activeClassName="bg-theme-bg-primary border-l-2 border-theme-accent text-theme-white">
              <i className="fas fa-cog mr-3"/> Settings
            </NavLink>
          </li>
        </ul>
      </aside>
  )
}