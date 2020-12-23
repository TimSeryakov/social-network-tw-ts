import React from 'react';
import {NavLink} from "react-router-dom";
import {BordersPropsType, parseBordersProps} from "../common/helpers/parseBordersProps";

type MainMenuPropsType = {
    borders: BordersPropsType
}


export const MainMenu = (props: MainMenuPropsType) => {

    const MainMenuStyle = `${parseBordersProps(props.borders)} sm:relative w-full fixed bottom-0 sm:w-48 md:w-56 bg-theme-bg-third flex-shrink-0 z-50`


    return (
        <aside className={MainMenuStyle}>
            <ul className="flex flex-row justify-around sm:block sm:border-0 border-t border-theme-border">
                <li className="border-b border-theme-border">
                    <NavLink to="/profile"
                             className="block py-4 text-xl border-b-2 sm:pl-6 sm:border-b-0 sm:border-l-2 text-theme-text border-theme-bg-third hover:text-white"
                             activeClassName="sm:bg-theme-bg-primary border-b-2 sm:border-b-0 sm:border-l-2 border-theme-accent text-theme-white">
                        <i className="far fa-user inline-block sm:w-40px px-4 sm:px-0"/> <span
                        className="hidden sm:inline">Profile</span>
                    </NavLink>
                </li>
                <li className="border-b border-theme-border">
                    <NavLink to="/dialogs"
                             className="block py-4 text-xl border-b-2 sm:pl-6 sm:border-b-0 sm:border-l-2 text-theme-text border-theme-bg-third hover:text-white"
                             activeClassName="sm:bg-theme-bg-primary border-b-2 sm:border-b-0 sm:border-l-2 border-theme-accent text-theme-white">
                        <i className="far fa-envelope inline-block sm:w-40px px-4 sm:px-0"/> <span
                        className="hidden sm:inline">Messenger</span>
                    </NavLink>
                </li>
                <li className="border-b border-theme-border">
                    <NavLink to="/news"
                             className="block py-4 text-xl border-b-2 sm:pl-6 sm:border-b-0 sm:border-l-2 text-theme-text border-theme-bg-third hover:text-white"
                             activeClassName="sm:bg-theme-bg-primary border-b-2 sm:border-b-0 sm:border-l-2 border-theme-accent text-theme-white">
                        <i className="fas fa-asterisk inline-block sm:w-40px px-4 sm:px-0"/> <span
                        className="hidden sm:inline">News</span>
                    </NavLink>
                </li>
                <li className="border-b border-theme-border">
                    <NavLink to="/music"
                             className="block py-4 text-xl border-b-2 sm:pl-6 sm:border-b-0 sm:border-l-2 text-theme-text border-theme-bg-third hover:text-white"
                             activeClassName="sm:bg-theme-bg-primary border-b-2 sm:border-b-0 sm:border-l-2 border-theme-accent text-theme-white">
                        <i className="fas fa-headphones-alt  inline-block sm:w-40px px-4 sm:px-0"/> <span
                        className="hidden sm:inline">Music</span>
                    </NavLink>
                </li>
                <li className="border-b border-theme-border">
                    <NavLink to="/users"
                             className="block py-4 text-xl border-b-2 sm:pl-6 sm:border-b-0 sm:border-l-2 text-theme-text border-theme-bg-third hover:text-white"
                             activeClassName="sm:bg-theme-bg-primary border-b-2 sm:border-b-0 sm:border-l-2 border-theme-accent text-theme-white">
                        <i className="fas fa-users inline-block sm:w-40px px-4 sm:px-0"/> <span
                        className="hidden sm:inline">Users</span>
                    </NavLink>
                </li>
                <li className="border-b border-theme-border">
                    <NavLink to="/settings"
                             className="block py-4 text-xl border-b-2 sm:pl-6 sm:border-b-0 sm:border-l-2 text-theme-text border-theme-bg-third hover:text-white"
                             activeClassName="sm:bg-theme-bg-primary border-b-2 sm:border-b-0 sm:border-l-2 border-theme-accent text-theme-white">
                        <i className="fas fa-cog inline-block sm:w-40px px-4 sm:px-0"/> <span
                        className="hidden sm:inline">Settings</span>
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}