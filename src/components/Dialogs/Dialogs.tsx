import React from 'react';
import {PageTitle} from "../PageTitle/PageTitle";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {InputMessageSection} from "./InputMessageSection/InputMessageSection";
import {DialogsDataType, MessagesDataType} from "../../redux/state";

type PropsType = {
  state: DialogsStateType
}

type DialogsStateType = {
  dialogsData: Array<DialogsDataType>
  messagesData: Array<MessagesDataType>
}

export function Dialogs (props: PropsType) {

  const dialogsList = props.state.dialogsData.map(d =>
      // <DialogItem id={d.id} name={d.name} avatar={d.avatar} unreadMessages={d.unreadMessages}/>)
      <DialogItem id={d.id} name={d.name} avatar={`https://api.adorable.io/avatars/96/${d.name}.png`} unreadMessages={d.unreadMessages}/>)

  const messagesList = props.state.messagesData.map(m =>
      <MessageItem id={m.id} belongsToUser={m.belongsToUser} text={m.text}/> )

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

