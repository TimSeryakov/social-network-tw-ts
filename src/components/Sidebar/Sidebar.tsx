import React from 'react';
import {NavLink} from "react-router-dom";


export const Sidebar = () => {
  return (
      <aside className="w-40 bg-gray-900">
        <ul className="py-3">
          <li className=""><NavLink to={"/profile"} className="text-white block hover:bg-gray-800 py-1 pl-6" activeClassName="text-purple-500">Profile</NavLink></li>
          <li className=""><NavLink to={"/dialogs"} className="text-white block hover:bg-gray-800 py-1 pl-6" activeClassName="text-purple-500">Messages</NavLink></li>
          <li className=""><NavLink to={"/news"} className="text-white block hover:bg-gray-800 py-1 pl-6" activeClassName="text-purple-500">News</NavLink></li>
          <li className=""><NavLink to={"/music"} className="text-white block hover:bg-gray-800 py-1 pl-6" activeClassName="text-purple-500">Music</NavLink></li>
          <li className="mt-3"><NavLink to={"/settings"} className="text-white block hover:bg-gray-800 py-1 pl-6" activeClassName="text-purple-500">Settings</NavLink></li>
        </ul>
      </aside>
  )
}