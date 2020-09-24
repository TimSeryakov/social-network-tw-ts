import React from 'react';
import {NavLink} from "react-router-dom";

type DialogItemType = {
  name: string
  id: number
}

const DialogItem = (props: DialogItemType) => {
  const path = "/dialogs/"

  return (
      <div className="pl-4">

        <NavLink to={path + props.id}>{props.name}</NavLink>
      </div>
  )
}

type MessagePropsType = {
  text: string
}

const Message = (props: MessagePropsType) => {
  return (
      <div className="">{props.text}</div>
  )
}

export const Dialogs = () => {
  return (
      <section className="h-full">
        <header className="py-3 px-4">
            <h2 className="text-white text-3xl font-bold">Your dialogs</h2>
        </header>

        <div className="flex h-full w-full flex-auto">

          <div className="bg-theme-bg-primary w-4/12">
            <div className="">
              <h3 className="py-2 px-4 border-t border-b border-theme-border text-theme-text bg-theme-bg-secondary">Users</h3>
            </div>
            <DialogItem name="Maxy" id={1}/>
            <DialogItem name="Olya" id={2}/>
            <DialogItem name="Vika" id={3}/>
            <DialogItem name="Masha" id={4}/>
          </div>
          <div className="bg-theme-bg-primary h-full w-full w-8/12 flex-auto">
            <Message text="Hi"/>
            <Message text="How r you"/>
            <Message text="i want to talk"/>
            <Message text="answer me"/>
            <Message text="please"/>
          </div>
        </div>


      </section>
  )
}

