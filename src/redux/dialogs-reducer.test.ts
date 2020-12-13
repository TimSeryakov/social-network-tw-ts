import {v1} from "uuid";
import samurai from "../assets/img/samurai.png";
import dialogsReducer, {
    DialogDataType,
    MessageDataType,
    sendMessageAC,
    updateTypedMessageTextAC
} from "./dialogs-reducer";

type StartStateType = {
    dialogsData: DialogDataType[] // Array<DialogDataType>
    messagesData: MessageDataType[] // Array<MessageDataType>
    typedMessageText: string
}

let startState: StartStateType

beforeEach(() => {
    startState = {
        dialogsData: [
            {id: v1(), name: "Max", avatar: samurai, unreadMessages: 0},
            {id: v1(), name: "Bob", avatar: samurai, unreadMessages: 1},
            {id: v1(), name: "Larry", avatar: samurai, unreadMessages: 99},
        ] as DialogDataType[], // Array<DialogDataType>
        messagesData: [
            {id: v1(), belongsToUser: false, text: "Hi"},
            {id: v1(), belongsToUser: false, text: "Unit tests is really cool!"},
            {id: v1(), belongsToUser: false, text: "really?"},
        ] as MessageDataType[], // Array<MessageDataType>
        typedMessageText: "" as string,
    }
})

test('Typed Message Text should be updated', () => {

    const action = updateTypedMessageTextAC("New Message")

    const endState = dialogsReducer(startState, action)

    expect(endState.typedMessageText).toBe("New Message")
})

test('New message should be added', () => {

    const tmpState = dialogsReducer(startState, updateTypedMessageTextAC("New Message"))
    const endState = dialogsReducer(tmpState, sendMessageAC())

    expect(endState.messagesData[3].text).toBe("New Message")
})