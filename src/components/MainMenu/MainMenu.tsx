import React from 'react';
import {NavLink} from "react-router-dom";
import {BordersPropsType, parseBordersProps} from "../common/utils/parseBordersProps";

type SidebarPropsType ={
  borders: BordersPropsType
}


export const MainMenu = (props: SidebarPropsType) => {

  const MainMenuStyle = `${parseBordersProps(props.borders)} sm:relative w-full fixed bottom-0 sm:w-56 bg-theme-bg-third flex-shrink-0`


  return (
      <aside className={MainMenuStyle}>
        <ul className="flex flex-row justify-around sm:block sm:border-0 border-t border-theme-border">
          <li className="border-b border-theme-border">
            <NavLink to={"/profile"}
                     className="block px-6 py-4 text-xl border-b-2 sm:pl-6 sm:border-b-0 sm:border-l-2 text-theme-text border-theme-bg-third hover:text-white"
                     activeClassName="bg-theme-bg-primary border-b-2 sm:border-b-0 sm:border-l-2 border-theme-accent text-theme-white">
              <i className="sm:mr-4 far fa-user"/> <span className="hidden sm:inline">Profile</span>
            </NavLink>
          </li>
          <li className="border-b border-theme-border">
            <NavLink to={"/dialogs"}
                     className="block px-6 py-4 text-xl border-b-2 sm:pl-6 sm:border-b-0 sm:border-l-2 text-theme-text border-theme-bg-third hover:text-white"
                     activeClassName="bg-theme-bg-primary border-b-2 sm:border-b-0 sm:border-l-2 border-theme-accent text-theme-white">
              <i className="sm:mr-4 far fa-envelope"/> <span className="hidden sm:inline">Messenger</span>
            </NavLink>
          </li>
          <li className="border-b border-theme-border">
            <NavLink to={"/news"}
                     className="block px-6 py-4 text-xl border-b-2 sm:pl-6 sm:border-b-0 sm:border-l-2 text-theme-text border-theme-bg-third hover:text-white"
                     activeClassName="bg-theme-bg-primary border-b-2 sm:border-b-0 sm:border-l-2 border-theme-accent text-theme-white">
              <i className="sm:mr-4 fas fa-asterisk"/> <span className="hidden sm:inline">News</span>
            </NavLink>
          </li>
          <li className="border-b border-theme-border">
            <NavLink to={"/music"}
                     className="block px-6 py-4 text-xl border-b-2 sm:pl-6 sm:border-b-0 sm:border-l-2 text-theme-text border-theme-bg-third hover:text-white"
                     activeClassName="bg-theme-bg-primary border-b-2 sm:border-b-0 sm:border-l-2 border-theme-accent text-theme-white">
              <i className="sm:mr-3 fas fa-headphones-alt"/> <span className="hidden sm:inline">Music</span>
            </NavLink>
          </li>
          <li className="border-b border-theme-border">
            <NavLink to={"/settings"}
                     className="block px-6 py-4 text-xl border-b-2 sm:pl-6 sm:border-b-0 sm:border-l-2 text-theme-text border-theme-bg-third hover:text-white"
                     activeClassName="bg-theme-bg-primary border-b-2 sm:border-b-0 sm:border-l-2 border-theme-accent text-theme-white">
              <i className="sm:mr-3 fas fa-cog"/> <span className="hidden sm:inline">Settings</span>
            </NavLink>
          </li>
        </ul>
      </aside>
  )
}