import React from 'react';
import {BordersPropsType, parseBordersProps} from "../common/utils/parseBordersProps";

type HeaderPropsType ={
  borders: BordersPropsType
}


export function Header (props: HeaderPropsType) {

  const headerStyle = `${parseBordersProps(props.borders)} p-5 bg-theme-bg-primary h-24 flex justify-between w-full`
  
  return (
      <header className={headerStyle}>
        <div className="">
          <h1 className="relative text-4xl italic font-bold text-white uppercase font-play">Shuh Shuh
            <span className="absolute inline-block px-2 py-1 ml-4 text-sm uppercase -translate-y-1/2 rounded-sm bg-theme-badge text-theme-text">beta</span>
          </h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center justify-end">
            <li className="p-4"><a className="text-xl text-theme-text hover:text-white" href="/about">Used Technologies</a></li>
            {/*<li className="p-4"><a className="text-xl text-theme-text hover:text-white" href="/technologies">About</a></li>*/}
            <li className="p-4"><a className="text-xl text-theme-text hover:text-white" href="/login">Login</a></li>
            <li className="p-4"><a className="text-xl text-theme-text hover:text-white" href="/signup">Signup</a></li>
          </ul>
        </div>
      </header>
  )
}

