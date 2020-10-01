import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const postsData = [
  {id: 1, text: "Сбербанк выкупил актрису Зою Бербер и назвал Сбербербер.", likesCount: 29},
  {id: 2, text: "На всех корпоративах я всегда бесплатно фотографирую своих коллег. А вот удаляю их фотографии уже за деньги.", likesCount: 11},
  {id: 3, text: "Ехал в яндекс такси и попал в яндекс пробку...", likesCount: 42},
]

ReactDOM.render(<App postsData={postsData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
