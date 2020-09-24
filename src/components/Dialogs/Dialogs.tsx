import React from 'react';
import {NavLink} from "react-router-dom";

type DialogItemType = {
  name: string
  id: number
}

const DialogItem = (props: DialogItemType) => {
  const path = "/dialogs/"

  return (
      <div className=""><NavLink to={path + props.id}>{props.name}</NavLink></div>
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
        <header><h2>Dialogs 1</h2></header>

        <div className="flex h-full w-full flex-auto">
          <div className="bg-red-400 w-4/12">
            <DialogItem name="Maxy" id={1}/>
            <DialogItem name="Olya" id={2}/>
            <DialogItem name="Vika" id={3}/>
            <DialogItem name="Masha" id={4}/>
          </div>
          <div className="bg-blue-900 h-full w-full w-8/12 flex-auto">
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

