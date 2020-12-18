import React from 'react';
import {PageTitle} from "../common/PageTitle";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogDataType, MessageDataType} from "../../redux/dialogs-reducer";
import {Redirect} from 'react-router-dom';
import DialogsForm, {DialogsFormDataType} from './DialogsForm';
import * as Scroll from "react-scroll";

type PropsType = {
    dialogsData: DialogDataType[] // Array<DialogDataType>

    messagesData: MessageDataType[] // Array<MessageDataType>
    sendMessage: (value: string) => void

    updateTypedMessageText: (newValue: string) => void

    isAuth: boolean
}


export function Dialogs(props: PropsType) {

    const scroll = Scroll.animateScroll

    const dialogsList = props.dialogsData.map(d =>
        <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar} unreadMessages={d.unreadMessages}/>)

    const messagesList = props.messagesData.map(m =>
        <MessageItem key={m.id} id={m.id} belongsToUser={m.belongsToUser} text={m.text}/>)


    const sendMessage = (formData: DialogsFormDataType)=> {
        if (formData.newMessageTextareaValue) {
            props.sendMessage(formData.newMessageTextareaValue)
            scroll.scrollToBottom()
        }
    }


    if (!props.isAuth) return <Redirect to="/login"/>

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

                    <DialogsForm
                        // typedMessageText={props.typedMessageText}
                        // sendMessage={props.sendMessage}
                        // updateTypedMessageText={props.updateTypedMessageText}
                        // handleSubmit={}
                        onSubmit={sendMessage}
                    />

                </div>
            </div>


        </section>
    )
}

