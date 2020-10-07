import React from 'react';
import {Post} from "./Post/Post"
import {PostsDataType} from "../../../redux/state";

type PropsType = {
  postsData: Array<PostsDataType>
}


export function MyPosts (props: PropsType) {

  const postsList = props.postsData.map(post => <Post text={post.text} likesCount={post.likesCount}/>)

  return (
      <section className="text-theme-text border-t border-theme-border">

        <div className="flex pb-3 border-b border-theme-border py-4 px-4">
          <textarea
            className="flex-grow border-theme-border px-3 py-1 mr-2 border bg-theme-bg-third rounded-md text-white focus:outline-none focus:shadow-outline"
            placeholder="What's new..."/>
            <button
                className="bg-theme-accent-alternative text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline">
              Post
            </button>
        </div>


        <div className="pt-4 pb-8 px-4">

          {postsList}

        </div>
      </section>
  )
}
