import React from "react";

type PageTitleType = {
  title: string
}
export function PageTitle (props: PageTitleType) {
  return (
      <header className="py-4 px-4">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">{props.title}</h2>
      </header>
  )
}