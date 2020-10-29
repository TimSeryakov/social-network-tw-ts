import {v1} from "uuid";
import samurai from "../assets/img/samurai.png";
import fuji from "../assets/img/fuji.png";
import lionstatue from "../assets/img/lionstatue.png";
import luckycat from "../assets/img/luckycat.png";
import {ActionsTypes} from "./store-redux";

const initialState = {
      dialogsData: [
        {id: v1(), name: "Max", avatar: samurai, unreadMessages: 5},
        {id: v1(), name: "Bob", avatar: fuji, unreadMessages: 99},
        {id: v1(), name: "Larry", avatar: lionstatue, unreadMessages: 0},
        {id: v1(), name: "Mary", avatar: luckycat, unreadMessages: 9},
        {id: v1(), name: "Johnny", avatar: samurai, unreadMessages: 1},
        {id: v1(), name: "Flint", avatar: fuji, unreadMessages: 0},
        {id: v1(), name: "Jackie", avatar: luckycat, unreadMessages: 999},
      ] as Array<DialogsDataType>,
      messagesData: [
        {id: v1(), belongsToUser: false, text: "Hi"},
        {id: v1(), belongsToUser: false, text: "How r you"},
        {id: v1(), belongsToUser: false, text: "i want to talk"},
        {id: v1(), belongsToUser: false, text: "answer me"},
        {id: v1(), belongsToUser: false, text: "please"},
        {id: v1(), belongsToUser: true, text: "Hi, im there! 👋"},
        {id: v1(), belongsToUser: false, text: "really 👻"},
      ] as Array<MessagesDataType>,
      typedMessageText: "" as string,
    }

export type DialogsPageType = typeof initialState

export type DialogsDataType = {
  id: string
  name: string
  avatar: string
  unreadMessages: number
}
export type MessagesDataType = {
  id: string
  belongsToUser: boolean
  text: string
}

export type UpdateTypedMessageTextActionType = {
  type: typeof UPDATE_TYPED_MESSAGE_TEXT
  newValue: string
}

export type SendMessageActionType = {
  type: typeof SEND_MESSAGE
}

const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_TYPED_MESSAGE_TEXT = "UPDATE-TYPED-MESSAGE-TEXT"

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
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