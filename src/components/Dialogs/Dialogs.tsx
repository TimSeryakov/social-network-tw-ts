import React, {ChangeEvent, KeyboardEvent} from 'react';
import {PageTitle} from "../PageTitle/PageTitle";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import * as Scroll from 'react-scroll';
import {DialogDataType, MessageDataType} from "../../redux/dialogs-reducer";

type PropsType = {
  dialogsData: Array<DialogDataType>

  messagesData: Array<MessageDataType>
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
      <section className="flex flex-col h-full">

        <PageTitle title="Your dialogs"/>

        <div className="flex flex-auto flex-grow">

          <div className="border-r bg-theme-bg-primary border-theme-border sm:w-4/12">
              <h3 className="px-4 py-2 text-sm text-center border-t border-b sm:text-base sm:text-left border-theme-border text-theme-text bg-theme-bg-secondary">Friends</h3>

            {dialogsList}

          </div>

          <div className="flex flex-col flex-auto border-t bg-theme-bg-primary border-theme-border sm:w-8/12">
            <div className="flex-grow">

              {messagesList}

            </div>

            <div className="pt-3 border-t border-theme-border">  {/*<InputMessageSection/>*/}

              <div className="flex mx-3 mb-3">
                <textarea
                    className="flex-grow w-full px-3 py-1 mr-2 text-white placeholder-gray-700 border rounded-md resize-none border-theme-border bg-theme-bg-third focus:outline-none focus:shadow-outline"
                    placeholder="Write message..."
                    onChange={onNewMessageTextAreaChange}
                    onKeyPress={onNewMessageKeyPress}
                    value={props.typedMessageText}
                    ref={textAreaRef}
                />
                <button
                    className="px-4 py-2 text-white rounded-md bg-theme-accent-alternative focus:outline-none focus:shadow-outline"
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

