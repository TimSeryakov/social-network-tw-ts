import samurai from "../assets/img/samurai.png";
import fuji from "../assets/img/fuji.png";
import lionstatue from "../assets/img/lionstatue.png";
import luckycat from "../assets/img/luckycat.png";
import {v1} from "uuid";

let rerenderEntireTree = () => {}

export const subscribe = (observer: () => void) => {
  rerenderEntireTree = observer // Observer pattern
}

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}
type ProfilePageType = {
  postsData: Array<PostsDataType>
  typedPostText: string
}
type DialogsPageType = {
  dialogsData: Array<DialogsDataType>
  messagesData: Array<MessagesDataType>
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
  avatar: string // ????
  unreadMessages: number
}
export type MessagesDataType = {
  id: string
  belongsToUser: boolean
  text: string
}

export const state: RootStateType = {
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
      {id: v1(), name: "Bob", avatar: fuji, unreadMessages: 2},
      {id: v1(), name: "Larry", avatar: lionstatue, unreadMessages: 0},
      {id: v1(), name: "Mary", avatar: luckycat, unreadMessages: 9},
      {id: v1(), name: "Johny", avatar: samurai, unreadMessages: 1},
      {id: v1(), name: "Flint", avatar: fuji, unreadMessages: 0},
      {id: v1(), name: "Sara", avatar: lionstatue, unreadMessages: 0},
      {id: v1(), name: "Jackie", avatar: luckycat, unreadMessages: 1},
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
  },
  sidebar: {}
}


export const addPost = () => {
  const newPost: PostsDataType = { id: v1(), text: state.profilePage.typedPostText, likesCount: 0 }
  state.profilePage.postsData.push(newPost)
  updateTypedPostText("")
  rerenderEntireTree()
}

export const updateTypedPostText = (newValue: string) => {
  state.profilePage.typedPostText = newValue
  rerenderEntireTree()
}
