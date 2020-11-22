import React, {FC} from 'react'
import {BordersPropsType, parseBordersProps} from "./utils/parseBordersProps";
import {PreloaderCircle} from "./PreloaderCircle";

type PreloaderPropsType = {
  borders?: BordersPropsType
  message?: string
}
export const Preloader: FC<PreloaderPropsType> = (
    {
      borders = "none", message = "Loading..."}
) => {

  const style = `${parseBordersProps(borders)} w-full h-full flex justify-center items-center`

  return (
      <div className={style}>
        <PreloaderCircle/>
        <span className="text-white text-3xl animate-pulse">
          {message}
        </span>
      </div>
  )
}
