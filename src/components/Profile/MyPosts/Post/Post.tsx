import React from 'react';

type PostType = {
  title: string
  message: string
}

export const Post = (props: PostType) => (
    <article>
      <PostTitle title={props.title}/>
      <PostBody message={props.message}/>
    </article>
)


const PostTitle = (props: any) => {
  return <h3>{props.title}</h3>
}

const PostBody = (props: any) => {
  return <p>{props.message}</p>
}