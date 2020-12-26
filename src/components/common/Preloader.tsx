import React, {FC} from 'react'
import {BordersPropsType, parseBordersProps} from "../../helpers/parseBordersProps";
import {PreloaderCircle} from "./PreloaderCircle";

type PreloaderPropsType = {
    borders?: BordersPropsType
    message?: string
    circle?: boolean
}
export const Preloader: FC<PreloaderPropsType> = (
    {
        borders = "none", message = "Loading...", circle = true
    }
) => {

    const style = `${parseBordersProps(borders)} w-full h-full flex justify-center items-center`

    return (
        <div className={style}>
            {circle && <PreloaderCircle/>}
            <span className="text-white text-3xl animate-pulse">
          {message}
        </span>
        </div>
    )
}
