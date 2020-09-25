import React from 'react';


export const Header = () => {

  return (
      <header className="p-5 bg-theme-bg-primary h-24 border-b border-theme-border flex justify-between w-full">
        <div className="">
          <h1 className="font-bold text-4xl font-play uppercase italic text-white font-bold relative">Shuh Shuh
            <span className="uppercase bg-theme-badge text-theme-text ml-4 px-2 py-1 rounded-sm text-sm inline-block absolute -translate-y-1/2">beta</span>
          </h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center justify-end">
            <li className="p-4"><a className="text-theme-text text-xl hover:text-white" href="/about">Used Technologies</a></li>
            <li className="p-4"><a className="text-theme-text text-xl hover:text-white" href="/technologies">About</a></li>
          </ul>
        </div>
      </header>
  )
}

