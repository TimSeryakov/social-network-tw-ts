import React from 'react';
import {PageTitle} from "../PageTitle/PageTitle";
import {DialogItem} from "./components/DialogItem";
import {MessageItem} from "./components/MessageItem";
import samurai from '../../assets/img/samurai.png';
import fuji from '../../assets/img/fuji.png';
import lionstatue from '../../assets/img/lionstatue.png';
import luckycat from '../../assets/img/luckycat.png';
import {InputMessageSection} from "./InputMessageSection";


export const Dialogs = () => {

  let dialogsData = [
    {id: 1, name: "Max", avatar: samurai},
    {id: 2, name: "Bob", avatar: fuji},
    {id: 3, name: "Larry", avatar: lionstatue},
    {id: 4, name: "Mary", avatar: luckycat},
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


  return (
      <section className="h-full flex flex-col">

        <PageTitle title="Your dialogs"/>

        <div className="flex flex-auto flex-grow">

          <div className="bg-theme-bg-primary border-r border-theme-border w-4/12">
            <div className="">
              <h3 className="py-2 px-4 border-t border-b border-theme-border text-theme-text bg-theme-bg-secondary">Friends</h3>
            </div>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} avatar={dialogsData[0].avatar} unreadMessages={2}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} avatar={dialogsData[1].avatar} unreadMessages={3}/>
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} avatar={dialogsData[2].avatar} unreadMessages={0}/>
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} avatar={dialogsData[3].avatar} unreadMessages={1}/>
          </div>

          <div className="bg-theme-bg-primary border-t border-theme-border w-8/12 flex flex-auto flex-col">
            <div className="flex-grow">
              <MessageItem belongsToUser={messagesData[0].belongsToUser} text={messagesData[0].text}/>
              <MessageItem belongsToUser={messagesData[1].belongsToUser} text={messagesData[1].text}/>
              <MessageItem belongsToUser={messagesData[2].belongsToUser} text={messagesData[2].text}/>
              <MessageItem belongsToUser={messagesData[3].belongsToUser} text={messagesData[3].text}/>
              <MessageItem belongsToUser={messagesData[4].belongsToUser} text={messagesData[4].text}/>
              <MessageItem belongsToUser={messagesData[5].belongsToUser} text={messagesData[5].text}/>
              <MessageItem belongsToUser={messagesData[6].belongsToUser} text={messagesData[6].text}/>
            </div>

            <div className="border-theme-border border-t pt-3">
              <InputMessageSection/>
            </div>

          </div>
        </div>



      </section>
  )
}

