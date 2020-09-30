import React from 'react';

type PostType = {
  text: string
  likesCount: number
}

export const Post = (props: PostType) => (
    <div className="bg-theme-bg-secondary rounded-md px-6 pt-6 pb-3 mt-4">
      <div>
        <p>{props.text}</p>
      </div>
      <div className="flex justify-end mt-4">
        <i className="far fa-thumbs-up"/><span className="pl-1 text-xs font-bold">{props.likesCount}</span>
      </div>
    </div>
)
