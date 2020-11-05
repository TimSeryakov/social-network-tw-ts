import React, {ChangeEvent, KeyboardEvent} from 'react';
import {PageTitle} from "../PageTitle/PageTitle";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import * as Scroll from 'react-scroll';
import {DialogsDataType, MessagesDataType} from "../../redux/dialogs-reducer";

type PropsType = {
  dialogsData: Array<DialogsDataType>

  messagesData: Array<MessagesDataType>
  sendMessage: ()  => void

  typedMessageText: string
  updateTypedMessageText: (newValue: string) => void
}

export function Dialogs(props: PropsType) {

  const textAreaRef = React.createRef<HTMLTextAreaElement>()

  const scroll = Scroll.animateScroll;

  const dialogsList = props.dialogsData.map(d =>
      <DialogItem id={d.id} name={d.name} avatar={d.avatar} unreadMessages={d.unreadMessages}/>)

  const messagesList = props.messagesData.map(m =>
      <MessageItem id={m.id} belongsToUser={m.belongsToUser} text={m.text}/>)

  const onSendMessageClick = () => {
    textAreaRef.current && textAreaRef.current.focus();

    if (props.typedMessageText) {
      props.sendMessage()
      scroll.scrollToBottom();
    }
  }

  const onNewMessageTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateTypedMessageText(e.currentTarget.value)
  }

  const onNewMessageKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      onSendMessageClick()
    }
  }

  return (
      <section className="h-full flex flex-col">

        <PageTitle title="Your dialogs"/>

        <div className="flex flex-auto flex-grow">

          <div className="bg-theme-bg-primary border-r border-theme-border sm:w-4/12">
              <h3 className="text-sm sm:text-base text-center sm:text-left py-2 px-4 border-t border-b border-theme-border text-theme-text bg-theme-bg-secondary">Friends</h3>

            {dialogsList}

          </div>

          <div className="bg-theme-bg-primary border-t border-theme-border sm:w-8/12 flex flex-auto flex-col">
            <div className="flex-grow">

              {messagesList}

            </div>

            <div className="border-theme-border border-t pt-3">  {/*<InputMessageSection/>*/}

              <div className="flex mx-3 mb-3">
                <textarea
                    className="flex-grow w-full border-theme-border px-3 py-1 mr-2 border bg-theme-bg-third rounded-md text-white focus:outline-none focus:shadow-outline placeholder-gray-700"
                    placeholder="Write message..."
                    onChange={onNewMessageTextAreaChange}
                    onKeyPress={onNewMessageKeyPress}
                    value={props.typedMessageText}
                    ref={textAreaRef}
                />
                <button
                    className="bg-theme-accent-alternative text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline"
                    onClick={onSendMessageClick}
                >
                  Send
                </button>
              </div>

            </div>

          </div>
        </div>


      </section>
  )
}

