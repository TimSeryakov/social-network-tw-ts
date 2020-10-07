import samurai from "../assets/img/samurai.png";
import fuji from "../assets/img/fuji.png";
import lionstatue from "../assets/img/lionstatue.png";
import luckycat from "../assets/img/luckycat.png";
import {v1} from "uuid";
import {rerenderEntireTree} from "../Render";

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}
type ProfilePageType = {
  postsData: Array<PostsDataType>
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
  },
  dialogsPage: {
    dialogsData: [
      {id: v1(), name: "Max", avatar: samurai, unreadMessages: 5},
      {id: v1(), name: "Bob", avatar: fuji, unreadMessages: 2},
      {id: v1(), name: "Larry", avatar: lionstatue, unreadMessages: 0},
      {id: v1(), name: "Mary", avatar: luckycat, unreadMessages: 9},
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


export const addPost = (postMessage: string) => {
  const newPost: PostsDataType = { id: v1(), text: postMessage, likesCount: 0 }
  state.profilePage.postsData.push(newPost)
  rerenderEntireTree(state)
}