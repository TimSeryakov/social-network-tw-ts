import React from 'react';
import {NavLink} from "react-router-dom";
import samurai from './samurai.png';
import fuji from './fuji.png';
import lionstatue from './lionstatue.png';
import luckycat from './luckycat.png';

type DialogItemType = {
  name: string
  id: number
  avatar: any
}

const DialogItem = (props: DialogItemType) => {
  const path = "/dialogs/"

  return (
      <div className="flex">
        <NavLink className="flex block border-b border-theme-border items-center hover:text-white text-theme-text pl-3 flex-grow" to={path + props.id}>
          <img className="inline-block w-12 h-12 bg-theme-bg-secondary rounded-full border border-theme-border flex items-center justify-center my-1 mr-3" src={props.avatar} alt=""/>
          {props.name}
        </NavLink>
      </div>
  )
}

type MessagePropsType = {
  text: string
}

const Message = (props: MessagePropsType) => {
  return (
      <div className="bg-theme-bg-secondary m-3 p-3 rounded-md text-theme-text">{props.text}</div>
  )
}

export const Dialogs = () => {
  return (
      <section className="h-full flex flex-col">
        <header className="py-4 px-4">
            <h2 className="text-white text-3xl font-bold">Your dialogs</h2>
        </header>

        <div className="flex flex-auto flex-grow">

          <div className="bg-theme-bg-primary border-r border-theme-border w-4/12">
            <div className="">
              <h3 className="py-2 px-4 border-t border-b border-theme-border text-theme-text bg-theme-bg-secondary">Users</h3>
            </div>
            <DialogItem name="Maxy" id={1} avatar={samurai}/>
            <DialogItem name="Olya" id={2} avatar={fuji}/>
            <DialogItem name="Vika" id={3} avatar={lionstatue}/>
            <DialogItem name="Masha" id={4} avatar={luckycat}/>
          </div>

          <div className="bg-theme-bg-primary border-t border-theme-border w-full flex-auto">
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

