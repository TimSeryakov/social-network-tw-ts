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
      <div key={props.id} className="flex">
        <NavLink
            className="flex block border-b border-theme-border items-center hover:text-white text-theme-text pl-3 flex-grow"
            to={path + props.id}>
          <img
              className="inline-block w-12 h-12 bg-theme-bg-secondary rounded-full border border-theme-border flex items-center justify-center my-1 mr-3"
              src={props.avatar} alt=""/>
          {props.name}
          <UnreadMessages value={props.unreadMessages}/>
        </NavLink>
      </div>
  )
}