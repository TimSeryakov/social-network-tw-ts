import {v1} from "uuid";
import samurai from "../assets/img/samurai.png";
import fuji from "../assets/img/fuji.png";
import lionstatue from "../assets/img/lionstatue.png";
import luckycat from "../assets/img/luckycat.png";

// ---------------------------------------------------------------------------------------------------------------------
// Init State
// ---------------------------------------------------------------------------------------------------------------------

const initialState = {
    dialogsData: [
        {id: v1(), name: "Max", avatar: samurai, unreadMessages: 5},
        {id: v1(), name: "Bob", avatar: fuji, unreadMessages: 99},
        {id: v1(), name: "Larry", avatar: lionstatue, unreadMessages: 0},
        {id: v1(), name: "Mary", avatar: luckycat, unreadMessages: 9},
        {id: v1(), name: "Johny", avatar: samurai, unreadMessages: 1},
        {id: v1(), name: "Flint", avatar: fuji, unreadMessages: 0},
        {id: v1(), name: "Jackie", avatar: luckycat, unreadMessages: 999},
    ] as DialogDataType[], // Array<DialogDataType>
    messagesData: [
        {id: v1(), belongsToUser: false, text: "Hi"},
        {id: v1(), belongsToUser: false, text: "How r you"},
        {id: v1(), belongsToUser: false, text: "i want to talk"},
        {id: v1(), belongsToUser: false, text: "answer me"},
        {id: v1(), belongsToUser: false, text: "please"},
        {id: v1(), belongsToUser: true, text: "Hi, im there! 👋"},
        {id: v1(), belongsToUser: false, text: "really 👻"},
    ] as MessageDataType[], // Array<MessageDataType>
}

// ---------------------------------------------------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------------------------------------------------

export type DialogsPageType = typeof initialState

export type DialogDataType = {
    id: string
    name: string
    avatar: string
    unreadMessages: number
}
export type MessageDataType = {
    id: string
    belongsToUser: boolean
    text: string
}

// ---------------------------------------------------------------------------------------------------------------------
// Action Creators Types
// ---------------------------------------------------------------------------------------------------------------------

export type DialogsActionTypes =
    | ReturnType<typeof sendMessageAC>

// ---------------------------------------------------------------------------------------------------------------------
// Enum (const)
// ---------------------------------------------------------------------------------------------------------------------

export enum DIALOGS {
    SEND_MESSAGE = "SEND-MESSAGE",
}

// ---------------------------------------------------------------------------------------------------------------------
// Reducer
// ---------------------------------------------------------------------------------------------------------------------

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionTypes): DialogsPageType => {
    switch (action.type) {
        case DIALOGS.SEND_MESSAGE:
            debugger
            const newMessage = action.messageText
            return {
                ...state,
                messagesData: [...state.messagesData, {id: v1(), belongsToUser: true, text: newMessage}],
            }
        default:
            return state
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// Action Creators
// ---------------------------------------------------------------------------------------------------------------------

export const sendMessageAC = (messageText: string) =>
    ({ type: DIALOGS.SEND_MESSAGE, messageText }) as const


export default dialogsReducer