import React from "react";

export const StoreContext: any = React.createContext(null);


export const Provider = (props: any) => {
  return (
      <StoreContext.Provider value={props.store}>
        {props.children}
      </StoreContext.Provider>
  )
}


