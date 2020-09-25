import React from "react";

type MessageItemPropsType = {
  text: string
  incoming: boolean
}
export const MessageItem = (props: MessageItemPropsType) => {
  const incomingStyle = "bg-theme-bg-secondary rounded-md text-theme-text p-3 my-3 mr-10 ml-3"
  const outGoing = "bg-theme-bg-third rounded-md text-theme-text p-3 my-3 ml-12 mr-3"

  if (props.incoming) {
    return (<div className={incomingStyle}>{props.text}</div>)
  } else {
    return (<div className={outGoing}>{props.text}</div>)
  }
}