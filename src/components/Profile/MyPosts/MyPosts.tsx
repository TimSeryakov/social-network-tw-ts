import React from 'react';
import {Post} from "./Post/Post"
import samurai from "../../../assets/img/samurai.png";
import fuji from "../../../assets/img/fuji.png";
import lionstatue from "../../../assets/img/lionstatue.png";
import luckycat from "../../../assets/img/luckycat.png";



export const MyPosts = () => {

  let postData = [
    {id: 1, text: "Сбербанк выкупил актрису Зою Бербер и назвал Сбербербер.", likesCount: 12},
    {id: 2, text: "На всех корпоративах я всегда бесплатно фотографирую своих коллег. А вот удаляю их фотографии уже за деньги.", likesCount: 12},
    {id: 3, text: "Ехал в яндекс такси и попал в яндекс пробку...", likesCount: 12},
  ]

  const postList = postData.map(post => <Post text={post.text} likesCount={post.likesCount}/>)

  return (
      <section className="text-theme-text border-t border-theme-border">

        <div className="flex pb-3 border-b border-theme-border py-4 px-4">
          <textarea
            className="flex-grow border-theme-border px-3 py-1 mr-2 border bg-theme-bg-third rounded-md text-white focus:outline-none focus:shadow-outline"
            placeholder="What's new..."/>
            <button
                className="bg-theme-accent-alternative text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline">Send
            </button>
        </div>


        <div className="pt-4 pb-8 px-4">
{/*          <Post text={postData[0].text} likesCount={postData[0].likesCount}/>
          <Post text={postData[1].text} likesCount={postData[1].likesCount}/>
          <Post text={postData[2].text} likesCount={postData[2].likesCount}/>*/}

          {postList}

        </div>
      </section>
  )
}
