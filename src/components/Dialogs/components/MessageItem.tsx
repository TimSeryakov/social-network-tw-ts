import React from "react";

type MessageItemPropsType = {
  text: string
  incoming: boolean
}

export const MessageItem = (props: MessageItemPropsType) => {
  const incomingStyle = "bg-theme-bg-secondary rounded-md rounded-bl-none text-theme-text p-3 my-3 mr-10 ml-3"
  const outGoingStyle = "bg-theme-bg-third rounded-md rounded-br-none text-theme-text p-3 my-3 ml-12 mr-3"

  return (<div className={props.incoming ? incomingStyle : outGoingStyle}>{props.text}</div>)

}