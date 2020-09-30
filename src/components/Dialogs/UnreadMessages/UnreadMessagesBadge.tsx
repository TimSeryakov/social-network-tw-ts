import React from "react";

type UnreadMessagesType = {
  value: number
}
export const UnreadMessages = (props: UnreadMessagesType) => {
  return (
      <span className="ml-4 text-theme-accent text-xs font-bold">
        {!!props.value && `+${props.value}`}
      </span>
  )
}