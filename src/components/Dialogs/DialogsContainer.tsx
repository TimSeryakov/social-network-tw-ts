import React from 'react';
import {sendMessageAC, updateTypedMessageTextAC} from "../../redux/dialogs-reducer";
import { StoreContext } from '../../redux/store-context';
import {Dialogs} from "./Dialogs";


export function DialogsContainer() {

  return (
      <StoreContext.Consumer>
        { // бывает баг если не переносить на новую строку
          (store: any) => {

            const state = store.getState()

            const sendMessage = () => {
              store.dispatch(sendMessageAC())
            }

            const updateTypedMessageText = (newValue: string) => {
              store.dispatch(updateTypedMessageTextAC(newValue))
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
        }
      </StoreContext.Consumer>
  )
}

