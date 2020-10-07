import React from 'react';
import luckycat from "../../../assets/img/luckycat.png";

export function ProfileInfo () {
  return (
      <section className="pt-4 pb-10 px-4 flex">
          <div className="p-3 flex-shrink-0">
            <img
                className="w-32 h-32 bg-theme-bg-secondary rounded-full border border-theme-border flex items-center justify-center"
                src={luckycat}
                alt="avatar"
            />
          </div>

          <div className="px-4 text-white">
            <div className="">
              <h3 className="text-3xl">Samurai Jack</h3>
              <p className="text-theme-text">CSS is easy. It’s like riding a bike, which is on fire and the ground is on
                fire and everything is on fire because it is hell.</p>
            </div>
            <div className="mt-8">
              <h4 className="pb-2">About</h4>
              <p className="text-theme-text">
                Я бегаю пять раз в неделю, обожаю собак, банановый хлеб и боевики. А еще копировать примеры текста для
                раздела "обо мне".
              </p>
            </div>
            <div className="mt-8">
              <h4 className="pb-2">Interests</h4>
              <p className="text-theme-text">
                <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Interstellar</span>
                <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#UK Music</span>
                <span
                    className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Atmospheric Drum'n'Bass</span>
                <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Drumfunk</span>
                <span
                    className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Old School Hip-Hop</span>
                <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#ReactJS</span>
                <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Adobe XD</span>
                <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#NextJS</span>
                <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Gadsby</span>
                <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#VueJS</span>
                <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#NuxtJS</span>
                <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Gridsome</span>
                <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#GraphQL</span>
                <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#TypeScript</span>
                <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#JetBrains</span>
              </p>
            </div>
          </div>
      </section>
  )
}