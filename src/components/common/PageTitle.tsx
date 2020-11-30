import React from "react";
import {PreloaderCircle} from "./PreloaderCircle";

type PageTitleType = {
  title: string
  isFetching?: boolean
}
export function PageTitle (props: PageTitleType) {
  return (
      <header className="py-4 px-4">
        <h2 className="inline-block text-white text-xl sm:text-2xl md:text-3xl font-bold">{props.title}</h2>
        { props.isFetching && <div className="inline-block ml-4"> <PreloaderCircle/> </div> }
      </header>
  )
}