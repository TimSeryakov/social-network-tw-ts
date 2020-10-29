import React from "react";
import {StoreType} from "./store-handmade";

export const StoreContext: any = React.createContext({} as StoreType)

export type ProviderType = {
  store: any // StoreType
  children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
  return (
      <StoreContext.Provider value={props.store}>
        {props.children}
      </StoreContext.Provider>
  )
}
