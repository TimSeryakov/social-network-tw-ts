import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type PaginationLinkPropsType = DefaultButtonPropsType & {
    active: boolean
}


export const PaginationLink: FC<PaginationLinkPropsType> = (
    {
        active, ...restProps
    }
) => {

    const style = `${active ? 'bg-theme-bg-third text-white px-6 py-4' : 'text-theme-text hover:bg-theme-bg-third py-3'} 
                 inline-block px-5 mx-2 border border-theme-border hover:text-white`

    return (
        <button className={style} {...restProps}/>
    )
}
