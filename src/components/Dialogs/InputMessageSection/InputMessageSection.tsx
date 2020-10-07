import React from "react";

export function InputMessageSection () {
  return (
      <div className="flex mx-3 mb-3">
        <textarea
            className="flex-grow border-theme-border px-3 py-1 mr-2 border bg-theme-bg-third rounded-md text-white focus:outline-none focus:shadow-outline"
            placeholder="Write message..."/>
        <button
            className="bg-theme-accent-alternative text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline">Send
        </button>
      </div>
  )
}