import React, {useState} from 'react';
import {BordersPropsType, parseBordersProps} from "../common/utils/parseBordersProps";
import {NavLink} from "react-router-dom";

type HeaderPropsType ={
  borders: BordersPropsType
  isAuth: boolean
  userLogin: string | null
  isAuthDataFetching: boolean
}


export function Header (props: HeaderPropsType) {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const headerStyle = `${parseBordersProps(props.borders)} p-5 bg-theme-bg-primary flex justify-between w-full`

  return (
      <header className={headerStyle}>
          <a href="/">
            <h1 className="relative text-2xl sm:text-4xl italic font-bold text-white uppercase font-play">Shuh Shuh
              <span className="absolute inline-block px-2 py-1 ml-4 text-sm uppercase -translate-y-1/2 rounded-sm bg-theme-badge text-theme-text">beta</span>
            </h1>
          </a>
        <nav className="flex flex-col items-end">
          <button
              className="text-theme-text cursor-pointer text-4xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"/>
          </button>
          <ul className={ `${ !navbarOpen && "hidden" } sm:flex flex-col sm:flex-row items-end sm:items-center justify-end`}>
            <li className="p-4"><a href="/about" className="text-xl text-theme-text hover:text-white">About</a></li>
            {
              props.isAuth ?
                <li className="p-4"><span className="text-xl text-theme-text">[ {props.userLogin} ]</span></li>
                :
                <li className="p-4"><NavLink to="https://social-network.samuraijs.com/login" className="text-xl text-theme-text hover:text-white">Login</NavLink></li>
            }
            {/*<li className="p-4"><a href="/signup" className="text-xl text-theme-text hover:text-white">Signup</a></li>*/}
          </ul>
        </nav>
      </header>
  )
}

