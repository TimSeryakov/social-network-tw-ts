import React from 'react';
import {Post} from "./Post/Post"

export const MyPosts = () => {
  return (
      <section className="text-theme-text">
        <Post title="Hello" message="Message"/>
        <Post title="Hello" message="Message"/>
      </section>
  )
}
