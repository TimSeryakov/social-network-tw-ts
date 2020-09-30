import React from 'react';
import {PageTitle} from "../PageTitle/PageTitle";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import samurai from '../../assets/img/samurai.png';
import fuji from '../../assets/img/fuji.png';
import lionstatue from '../../assets/img/lionstatue.png';
import luckycat from '../../assets/img/luckycat.png';
import {InputMessageSection} from "./InputMessageSection/InputMessageSection";


export const Dialogs = () => {

  let dialogsData = [
    {id: 1, name: "Max", avatar: samurai, unreadMessages: 5 },
    {id: 2, name: "Bob", avatar: fuji, unreadMessages: 2 },
    {id: 3, name: "Larry", avatar: lionstatue, unreadMessages: 0 },
    {id: 4, name: "Mary", avatar: luckycat, unreadMessages: 9 },
  ]

  let messagesData = [
    {id: 1, belongsToUser: false, text: "Hi"},
    {id: 2, belongsToUser: false, text: "How r you"},
    {id: 3, belongsToUser: false, text: "i want to talk"},
    {id: 4, belongsToUser: false, text: "answer me"},
    {id: 5, belongsToUser: false, text: "please"},
    {id: 6, belongsToUser: true,  text: "Hi, im there! 👋"},
    {id: 7, belongsToUser: false, text: "really 👻"},
  ]

  const dialogsList = dialogsData.map(d =>
      <DialogItem name={d.name} id={d.id} avatar={d.avatar} unreadMessages={d.unreadMessages}/>)

  const messagesList = messagesData.map(m =>
      <MessageItem belongsToUser={m.belongsToUser} text={m.text}/> )

  return (
      <section className="h-full flex flex-col">

        <PageTitle title="Your dialogs"/>

        <div className="flex flex-auto flex-grow">

          <div className="bg-theme-bg-primary border-r border-theme-border w-4/12">
            <div className="">
              <h3 className="py-2 px-4 border-t border-b border-theme-border text-theme-text bg-theme-bg-secondary">Friends</h3>
            </div>

            {dialogsList}

          </div>

          <div className="bg-theme-bg-primary border-t border-theme-border w-8/12 flex flex-auto flex-col">
            <div className="flex-grow">

              {messagesList}

            </div>

            <div className="border-theme-border border-t pt-3">
              <InputMessageSection/>
            </div>

          </div>
        </div>



      </section>
  )
}

