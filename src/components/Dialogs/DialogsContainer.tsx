import React from 'react';
import {sendMessageAC, updateTypedMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type PropsType = {
  store: any // FIXME
}

export function DialogsContainer(props: PropsType) {

  const state = props.store.getState()

  const sendMessage = () => {
    props.store.dispatch(sendMessageAC())
  }

  const updateTypedMessageText = (newValue: string) => {
    props.store.dispatch(updateTypedMessageTextAC(newValue))
  }


  return (
      <Dialogs dialogsData={state.dialogsPage.dialogsData}

               messagesData={state.dialogsPage.messagesData}
               sendMessage={sendMessage}

               typedMessageText={state.dialogsPage.typedMessageText}
               updateTypedMessageText={updateTypedMessageText}
       />
     )
}

