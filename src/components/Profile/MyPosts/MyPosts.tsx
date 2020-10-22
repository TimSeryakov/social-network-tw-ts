import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post"
import {ActionsTypes, addPostAC, PostsDataType, updateTypedPostTextAC} from "../../../redux/state";
import {BordersPropsType, parseBordersProps} from "../../common/utils/parseBordersProps";

type PropsType = {
  postsData: Array<PostsDataType>
  typedPostText: string
  borders: BordersPropsType
  dispatch: (action: ActionsTypes) => void
}


export function MyPosts (props: PropsType) {

  const postsList = props.postsData.map(post => <Post text={post.text} likesCount={post.likesCount}/>)



  const addPost = () => {
    if (props.typedPostText) {
      props.dispatch(addPostAC())
    }
  }


  const onTextAreaChange = (e:ChangeEvent<HTMLTextAreaElement>) => { // onPostChange у Димы
    props.dispatch(updateTypedPostTextAC(e.currentTarget.value))
  }

  return (
      <section className={`${parseBordersProps(props.borders)} text-theme-text bg-theme-bg-primary`}>

        <div className="flex px-4 py-4 pb-3 border-b border-theme-border">
          <textarea
            className="flex-grow px-3 py-1 mr-2 text-white border rounded-md border-theme-border bg-theme-bg-third focus:outline-none focus:shadow-outline placeholder-gray-700"
            placeholder="What's new..."
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
