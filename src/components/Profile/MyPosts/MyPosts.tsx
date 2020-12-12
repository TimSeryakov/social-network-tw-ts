import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from "./Post/Post"
import {BordersPropsType, parseBordersProps} from "../../common/utils/parseBordersProps";
import {scroller} from 'react-scroll';
import {PostDataType} from "../../../redux/profile-reducer";


type PropsType = {
  borders: BordersPropsType

  postsData: PostDataType[] // Array<PostDataType>
  addPost: () => void

  typedPostText: string
  updateTypedPostText: (newValue: string) => void
}


export function MyPosts (props: PropsType) {

  const textAreaRef = React.createRef<HTMLTextAreaElement>()
  const postsList = props.postsData.map(post => <Post key={post.id} text={post.text} likesCount={post.likesCount}/>).reverse()

  const onAddPostClick = () => {

    textAreaRef.current && textAreaRef.current.focus();

    if (props.typedPostText) {
      props.addPost()

      scroller.scrollTo('add-post-textarea', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })

    }
  }

  const onAddPostTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateTypedPostText(e.currentTarget.value)
  };

  const onAddPostTextAreaKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      onAddPostClick()
    }
  }

  return (
      <section className={`${parseBordersProps(props.borders)} text-theme-text bg-theme-bg-primary`}
               id="add-post-textarea"
      >

        <div className="flex px-4 py-4 pb-3 border-b border-theme-border">
          <textarea
            className="flex-grow px-3 py-1 mr-2 text-white placeholder-gray-700 border rounded-md resize-none border-theme-border bg-theme-bg-third focus:outline-none focus:shadow-outline"
            placeholder="What's new..."
            value={props.typedPostText}
            onChange={onAddPostTextAreaChange}
            onKeyPress={onAddPostTextAreaKeyPress}
            ref={textAreaRef}
          />
            <button
                className="px-4 py-2 text-white rounded-md bg-theme-accent-alternative focus:outline-none focus:shadow-outline"
                onClick={onAddPostClick}
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
