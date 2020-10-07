import React from "react";

type MessageItemPropsType = {
  text: string
  belongsToUser: boolean
}

export function MessageItem (props: MessageItemPropsType) {
  const incomingStyle = "bg-theme-bg-secondary rounded-md rounded-bl-none text-theme-text p-3 my-3 mr-10 ml-3"
  const outgoingStyle = "bg-theme-bg-third rounded-md rounded-br-none text-theme-text p-3 my-3 ml-12 mr-3"

  return (<div className={props.belongsToUser ? outgoingStyle : incomingStyle}>{props.text}</div>)

}