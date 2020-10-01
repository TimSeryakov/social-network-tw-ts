import React from 'react';
import {PageTitle} from "../PageTitle/PageTitle";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {InputMessageSection} from "./InputMessageSection/InputMessageSection";

type PropsType = {
  dialogsData: Array<DialogsDataType>
  messagesData: Array<MessagesDataType>
}

export type DialogsDataType = {
  id: number
  name: string
  avatar: string // ????
  unreadMessages: number
}

export type MessagesDataType = {
  id: number
  belongsToUser: boolean
  text: string
}

export const Dialogs = (props: PropsType) => {

  const dialogsList = props.dialogsData.map(d =>
      <DialogItem name={d.name} id={d.id} avatar={d.avatar} unreadMessages={d.unreadMessages}/>)

  const messagesList = props.messagesData.map(m =>
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

