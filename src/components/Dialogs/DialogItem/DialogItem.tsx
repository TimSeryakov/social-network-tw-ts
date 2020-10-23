import {NavLink} from "react-router-dom";
import {UnreadMessages} from "../UnreadMessages/UnreadMessagesBadge";
import React from "react";

type DialogItemType = {
  name: string
  id: string
  avatar: string
  unreadMessages: number
}
export function DialogItem (props: DialogItemType) {
  const path = "/dialogs/"

  return (
      <div className="flex">
        <NavLink
            className="flex flex-col items-center flex-grow py-1 px-5 sm:px-1 border-b sm:flex-row border-theme-border hover:text-white text-theme-text sm:pl-3"
            to={path + props.id}>
          <img
              className="flex items-center justify-center inline-block w-12 h-12 my-1 border rounded-full bg-theme-bg-secondary border-theme-border sm:mr-3"
              src={props.avatar} alt=""/>
            <div className="inline-block text-sm sm:text-base">{props.name}</div>
            <div className="absolute transform translate-x-5 -translate-y-1 sm:relative sm:transform-none"><UnreadMessages value={props.unreadMessages}/></div>
        </NavLink>
      </div>
  )
}