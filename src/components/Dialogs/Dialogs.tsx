import React from 'react';
import {NavLink} from "react-router-dom";
import {PageTitle} from "../PageTitle/PageTitle";
import samurai from './../../assets/img/samurai.png';
import fuji from './../../assets/img/fuji.png';
import lionstatue from './../../assets/img/lionstatue.png';
import luckycat from './../../assets/img/luckycat.png';


type DialogItemType = {
  name: string
  id: number
  avatar: string
}

const DialogItem = (props: DialogItemType) => {
  const path = "/dialogs/"

  return (
      <div className="flex">
        <NavLink
            className="flex block border-b border-theme-border items-center hover:text-white text-theme-text pl-3 flex-grow"
            to={path + props.id}>
          <img
              className="inline-block w-12 h-12 bg-theme-bg-secondary rounded-full border border-theme-border flex items-center justify-center my-1 mr-3"
              src={props.avatar} alt=""/>
          {props.name}
        </NavLink>
      </div>
  )
}

type MessagePropsType = {
  text: string
  incoming: boolean
}

const Message = (props: MessagePropsType) => {
  const incomingStyle = "bg-theme-bg-secondary rounded-md text-theme-text p-3 my-3 mr-10 ml-3"
  const outGoing = "bg-theme-bg-third rounded-md text-theme-text p-3 my-3 ml-12 mr-3"

  if (props.incoming) {
    return (<div className={incomingStyle}>{props.text}</div>)
  } else {
    return (<div className={outGoing}>{props.text}</div>)
  }
}

  export const Dialogs = () => {
    return (
        <section className="h-full flex flex-col">

          <PageTitle title="Your dialogs"/>

          <div className="flex flex-auto flex-grow">

            <div className="bg-theme-bg-primary border-r border-theme-border w-4/12">
              <div className="">
                <h3 className="py-2 px-4 border-t border-b border-theme-border text-theme-text bg-theme-bg-secondary">Friends</h3>
              </div>
              <DialogItem name="Maxy" id={1} avatar={samurai}/>
              <DialogItem name="Olya" id={2} avatar={fuji}/>
              <DialogItem name="Vika" id={3} avatar={lionstatue}/>
              <DialogItem name="Masha" id={4} avatar={luckycat}/>
            </div>

            <div className="bg-theme-bg-primary border-t border-theme-border w-8/12 flex-auto">
              <Message incoming={true} text="Hi"/>
              <Message incoming={true} text="How r you"/>
              <Message incoming={true} text="i want to talk"/>
              <Message incoming={true} text="answer me"/>
              <Message incoming={true} text="please"/>
              <Message incoming={false} text="Hi, im there!"/>
              <Message incoming={true} text="really 👻"/>
            </div>
          </div>


        </section>
    )
  }

