import {v1} from "uuid";
import {
  ActionsTypes,
  DialogsPageType,
  MessagesDataType,
  SendMessageActionType,
  UpdateTypedMessageTextActionType
} from "./store";

const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_TYPED_MESSAGE_TEXT = "UPDATE-TYPED-MESSAGE-TEXT"

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes): DialogsPageType => {
  switch (action.type) {
    case SEND_MESSAGE:
      if (state.typedMessageText) {
        const stateCopy = {...state}
        const newMessage: MessagesDataType = {id: v1(), belongsToUser: true, text: stateCopy.typedMessageText}
        stateCopy.messagesData.push(newMessage)
        stateCopy.typedMessageText = ""
        return stateCopy
      }
      return state
    case UPDATE_TYPED_MESSAGE_TEXT:
      const stateCopy = {...state}
      stateCopy.typedMessageText = action.newValue
      return stateCopy
    default:
      return state
  }
}

export const sendMessageAC = (): SendMessageActionType =>
    ({ type: SEND_MESSAGE })

export const updateTypedMessageTextAC = (newValue: string): UpdateTypedMessageTextActionType =>
    ({ type: UPDATE_TYPED_MESSAGE_TEXT, newValue: newValue })



export default dialogsReducer