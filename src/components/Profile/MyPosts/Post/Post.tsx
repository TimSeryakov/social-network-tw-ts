import React from 'react';

type PostType = {
  text: string
  likesCount: number
}

export const Post = (props: PostType) => (
    <div className="bg-theme-bg-secondary rounded-md text-theme-text p-6 mt-3">
      <div><p>{props.text}</p></div>
      <div className="mt-3 flex justify-end">
        <i className="far fa-thumbs-up"/>
        <span className="text-xs pl-2">Likes: {props.likesCount}</span>
      </div>
    </div>
)
