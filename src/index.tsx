import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import samurai from "./assets/img/samurai.png";
import fuji from "./assets/img/fuji.png";
import lionstatue from "./assets/img/lionstatue.png";
import luckycat from "./assets/img/luckycat.png";

export const postsData = [
  {id: 1, text: "Сбербанк выкупил актрису Зою Бербер и назвал Сбербербер.", likesCount: 29},
  {id: 2, text: "На всех корпоративах я всегда бесплатно фотографирую своих коллег. А вот удаляю их фотографии уже за деньги.", likesCount: 11},
  {id: 3, text: "Ехал в яндекс такси и попал в яндекс пробку...", likesCount: 42},
]

export const dialogsData = [
  {id: 1, name: "Max", avatar: samurai, unreadMessages: 5 },
  {id: 2, name: "Bob", avatar: fuji, unreadMessages: 2 },
  {id: 3, name: "Larry", avatar: lionstatue, unreadMessages: 0 },
  {id: 4, name: "Mary", avatar: luckycat, unreadMessages: 9 },
]

export const messagesData = [
  {id: 1, belongsToUser: false, text: "Hi"},
  {id: 2, belongsToUser: false, text: "How r you"},
  {id: 3, belongsToUser: false, text: "i want to talk"},
  {id: 4, belongsToUser: false, text: "answer me"},
  {id: 5, belongsToUser: false, text: "please"},
  {id: 6, belongsToUser: true,  text: "Hi, im there! 👋"},
  {id: 7, belongsToUser: false, text: "really 👻"},
]


ReactDOM.render(<App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
