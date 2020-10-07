import React from 'react';
import {Post} from "./Post/Post"
import {PostsDataType} from "../../../redux/state";
import {BordersPropsType, parseBordersProps} from "../../common/utils/parseBordersProps";

type PropsType = {
  postsData: Array<PostsDataType>
  typedPostText: string
  borders: BordersPropsType
  addPostCallback: (postMessage: string) => void
  updateTypedPostTextCallback: (newValue: string) => void
}


export function MyPosts (props: PropsType) {

  const postsList = props.postsData.map(post => <Post text={post.text} likesCount={post.likesCount}/>)
  const newPostElement = React.createRef<HTMLTextAreaElement>()
  const addPost = () => {
    if (newPostElement.current) {
      props.addPostCallback(newPostElement.current.value)
      props.updateTypedPostTextCallback("")
    }
  }
  const onTextAreaChange = () => {
    if (newPostElement.current) {
      props.updateTypedPostTextCallback(newPostElement.current.value)
    }
  }

  const myPostsStyle = `${parseBordersProps(props.borders)} text-theme-text bg-theme-bg-primary`

  return (
      <section className={myPostsStyle}>

        <div className="flex px-4 py-4 pb-3 border-b border-theme-border">
          <textarea
            className="flex-grow px-3 py-1 mr-2 text-white border rounded-md border-theme-border bg-theme-bg-third focus:outline-none focus:shadow-outline placeholder-gray-700"
            placeholder="What's new..."
            ref={newPostElement}
            value = {props.typedPostText}
            onChange={onTextAreaChange}
          />
            <button
                className="px-4 py-2 text-white rounded-md bg-theme-accent-alternative focus:outline-none focus:shadow-outline"
                onClick={addPost}
            >
              Post
            </button>
        </div>


        <div className="px-4 pt-4 pb-8">

          {postsList}

        </div>
      </section>
  )
}
