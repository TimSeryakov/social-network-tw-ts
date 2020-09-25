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
  return (
      <section className="h-full flex flex-col">

        <PageTitle title="Your dialogs"/>

        <div className="flex flex-auto flex-grow">

          <div className="bg-theme-bg-primary border-r border-theme-border w-4/12">
            <div className="">
              <h3 className="py-2 px-4 border-t border-b border-theme-border text-theme-text bg-theme-bg-secondary">Friends</h3>
            </div>
            <DialogItem name="Max" id={1} avatar={samurai} unreadMessages={2}/>
            <DialogItem name="Olya" id={2} avatar={fuji} unreadMessages={3}/>
            <DialogItem name="Vika" id={3} avatar={lionstatue} unreadMessages={0}/>
            <DialogItem name="Masha" id={4} avatar={luckycat} unreadMessages={1}/>
          </div>

          <div className="bg-theme-bg-primary border-t border-theme-border w-8/12 flex flex-auto flex-col">
            <div className="flex-grow">
              <MessageItem incoming={true} text="Hi"/>
              <MessageItem incoming={true} text="How r you"/>
              <MessageItem incoming={true} text="i want to talk"/>
              <MessageItem incoming={true} text="answer me"/>
              <MessageItem incoming={true} text="please"/>
              <MessageItem incoming={false} text="Hi, im there! 👋"/>
              <MessageItem incoming={true} text="really 👻"/>
            </div>

            <div className="border-theme-border border-t pt-3">
              <InputMessageSection/>
            </div>

          </div>
        </div>



      </section>
  )
}

