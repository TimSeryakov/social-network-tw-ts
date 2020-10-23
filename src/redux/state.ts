import samurai from "../assets/img/samurai.png";
import fuji from "../assets/img/fuji.png";
import lionstatue from "../assets/img/lionstatue.png";
import luckycat from "../assets/img/luckycat.png";
import {v1} from "uuid";


export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}
type ProfilePageType = {
  postsData: Array<PostsDataType>
  typedPostText: string
}
export type DialogsPageType = {
  dialogsData: Array<DialogsDataType>
  messagesData: Array<MessagesDataType>
  typedMessageText: string
}
type SidebarType = {

}
export type PostsDataType = {
  id: string
  text: string
  likesCount: number
}
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

export type StoreType = {
  _state: StateType
  _callSubscriber: () => void
  getState: () => StateType
  subscribe: (observer: () => void) => void
  dispatch: (action: AddPostActionType | UpdateTypedPostTextActionType |
                     UpdateTypedMessageTextActionType | SendMessageActionType
            ) => void
}

type UpdateTypedPostTextActionType = {
  type: "UPDATE-TYPED-POST-TEXT"
  newValue: string
}

type UpdateTypedMessageTextActionType = {
  type: "UPDATE-TYPED-MESSAGE-TEXT"
  newValue: string
}
type AddPostActionType = {
  type: "ADD-POST"
}
type SendMessageActionType = {
  type: "SEND-MESSAGE"
}

export type ActionsTypes = AddPostActionType | UpdateTypedPostTextActionType |
                           UpdateTypedMessageTextActionType | SendMessageActionType

const ADD_POST = "ADD-POST"
const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_TYPED_POST_TEXT = "UPDATE-TYPED-POST-TEXT"
const UPDATE_TYPED_MESSAGE_TEXT = "UPDATE-TYPED-MESSAGE-TEXT"

export let store: StoreType = {
  _state: {
    profilePage: {
      postsData: [
        {id: v1(), text: "Сбербанк выкупил актрису Зою Бербер и назвал Сбербербер.", likesCount: 29},
        {id: v1(), text: "На всех корпоративах я всегда бесплатно фотографирую своих коллег. А вот удаляю их фотографии уже за деньги.", likesCount: 11},
        {id: v1(), text: "Ехал в яндекс такси и попал в яндекс пробку...", likesCount: 42},
      ],
      typedPostText: "",
    },
    dialogsPage: {
      dialogsData: [
        {id: v1(), name: "Max", avatar: samurai, unreadMessages: 5},
        {id: v1(), name: "Bob", avatar: fuji, unreadMessages: 99},
        {id: v1(), name: "Larry", avatar: lionstatue, unreadMessages: 0},
        {id: v1(), name: "Mary", avatar: luckycat, unreadMessages: 9},
        {id: v1(), name: "Johnny", avatar: samurai, unreadMessages: 1},
        {id: v1(), name: "Flint", avatar: fuji, unreadMessages: 0},
        {id: v1(), name: "Jackie", avatar: luckycat, unreadMessages: 999},
      ],
      messagesData: [
        {id: v1(), belongsToUser: false, text: "Hi"},
        {id: v1(), belongsToUser: false, text: "How r you"},
        {id: v1(), belongsToUser: false, text: "i want to talk"},
        {id: v1(), belongsToUser: false, text: "answer me"},
        {id: v1(), belongsToUser: false, text: "please"},
        {id: v1(), belongsToUser: true, text: "Hi, im there! 👋"},
        {id: v1(), belongsToUser: false, text: "really 👻"},
      ],
      typedMessageText: "",
    },
    sidebar: {}
  },
  _callSubscriber() {},

  getState () {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        if (this._state.profilePage.typedPostText) {
          const newPost: PostsDataType = { id: v1(), text: this._state.profilePage.typedPostText, likesCount: 0 }
          this._state.profilePage.postsData.push(newPost)
          this._state.profilePage.typedPostText = ""
          this._callSubscriber()
        }
        break
      case SEND_MESSAGE:
        if (this._state.dialogsPage.typedMessageText) {
          const newMessage = {id: v1(), belongsToUser: true, text: this._state.dialogsPage.typedMessageText}
          this._state.dialogsPage.messagesData.push(newMessage)
          this._state.dialogsPage.typedMessageText = ""
          this._callSubscriber()
        }
        break
      case UPDATE_TYPED_POST_TEXT:
        this._state.profilePage.typedPostText = action.newValue
        this._callSubscriber()
        break
      case UPDATE_TYPED_MESSAGE_TEXT:
        this._state.dialogsPage.typedMessageText = action.newValue
        this._callSubscriber()
        break
    }
  }
}


export const addPostAC = (): AddPostActionType =>
    ({ type: ADD_POST })

export const sendMessageAC = (): SendMessageActionType =>
    ({ type: SEND_MESSAGE })

export const updateTypedPostTextAC = (newValue: string): UpdateTypedPostTextActionType =>
    ({ type: UPDATE_TYPED_POST_TEXT, newValue: newValue })

export const updateTypedMessageTextAC = (newValue: string): UpdateTypedMessageTextActionType =>
    ({ type: UPDATE_TYPED_MESSAGE_TEXT, newValue: newValue })

