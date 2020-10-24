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
        const newMessage: MessagesDataType = {id: v1(), belongsToUser: true, text: state.typedMessageText}
        state.messagesData.push(newMessage)
        state.typedMessageText = ""
      }
      return state
    case UPDATE_TYPED_MESSAGE_TEXT:
      state.typedMessageText = action.newValue
      return state
    default:
      return state
  }
}

export const sendMessageAC = (): SendMessageActionType =>
    ({ type: SEND_MESSAGE })

export const updateTypedMessageTextAC = (newValue: string): UpdateTypedMessageTextActionType =>
    ({ type: UPDATE_TYPED_MESSAGE_TEXT, newValue: newValue })



export default dialogsReducer