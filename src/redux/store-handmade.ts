import samurai from "../assets/img/samurai.png";
import fuji from "../assets/img/fuji.png";
import lionstatue from "../assets/img/lionstatue.png";
import luckycat from "../assets/img/luckycat.png";
import {v1} from "uuid";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}
export type ProfilePageType = {
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

export type UpdateTypedPostTextActionType = {
  type: "UPDATE-TYPED-POST-TEXT"
  newValue: string
}

export type UpdateTypedMessageTextActionType = {
  type: "UPDATE-TYPED-MESSAGE-TEXT"
  newValue: string
}
export type AddPostActionType = {
  type: "ADD-POST"
}
export type SendMessageActionType = {
  type: "SEND-MESSAGE"
}

export type ActionsTypes = AddPostActionType | UpdateTypedPostTextActionType |
    UpdateTypedMessageTextActionType | SendMessageActionType

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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber()
  }
}