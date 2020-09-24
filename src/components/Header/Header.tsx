import React from 'react';


export const Header = () => {

  return (
      <header className="p-5 bg-theme-bg-primary h-24 border-b border-l border-r border-theme-border">
        <h1 className="font-bold text-4xl font-play uppercase italic text-white font-bold relative">Swish Swish
          <span className="uppercase bg-theme-badge text-theme-text ml-4 px-2 py-1 rounded-sm text-sm inline-block absolute -translate-y-1/2">beta</span></h1>
      </header>
  )
}

