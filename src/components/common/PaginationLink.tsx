import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type PaginationLinkPropsType =  DefaultButtonPropsType & {
  active: boolean
}


  export const PaginationLink: FC<PaginationLinkPropsType> = (
      {
        active, ...restProps
      }
  ) => {

  const style = `${active ? 'bg-theme-bg-third text-white' : 'text-theme-text hover:bg-theme-bg-third'} 
                 inline-block px-5 py-3 mx-2 border border-theme-border hover:text-white`

  return (
    <button className={style} {...restProps}/>
  )
}
