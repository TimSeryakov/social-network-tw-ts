import React from "react";

const newMessageElement = React.createRef<HTMLTextAreaElement>()
const AddMessage = () => {
  alert(newMessageElement.current?.value)
  // TODO
}

export function InputMessageSection () {
  return (
      <div className="flex mx-3 mb-3">
        <textarea
            className="flex-grow border-theme-border px-3 py-1 mr-2 border bg-theme-bg-third rounded-md text-white focus:outline-none focus:shadow-outline placeholder-gray-700"
            placeholder="Write message..."
            ref={newMessageElement}
        />
        <button
            className="bg-theme-accent-alternative text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline"
            onClick={AddMessage}
        >
          Send
        </button>
      </div>
  )
}