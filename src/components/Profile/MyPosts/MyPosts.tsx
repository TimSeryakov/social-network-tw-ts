import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from "./Post/Post"
import {PostsDataType} from "../../../redux/store-handmade";
import {BordersPropsType, parseBordersProps} from "../../common/utils/parseBordersProps";
import {scroller} from 'react-scroll';


type PropsType = {
  borders: BordersPropsType

  postsData: Array<PostsDataType>
  addPost: () => void

  typedPostText: string
  updateTypedPostText: (newValue: string) => void
}



export function MyPosts (props: PropsType) {

  const textAreaRef = React.createRef<HTMLTextAreaElement>() // FIXME
  const postsList = props.postsData.map(post => <Post text={post.text} likesCount={post.likesCount}/>).reverse()

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

  const onAddPostTextAreaChange = (e:ChangeEvent<HTMLTextAreaElement>) => { // onPostChange у Димы
    props.updateTypedPostText(e.currentTarget.value)
  }

  const onAddPostTextAreaKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      onAddPostClick()
    }
  }

  return ( // TODO Вынести в отдельный компонент и сделать его универсальным
      <section className={`${parseBordersProps(props.borders)} text-theme-text bg-theme-bg-primary`}
               id={"add-post-textarea"}
      >

        <div className="flex px-4 py-4 pb-3 border-b border-theme-border">
          <textarea
            className="flex-grow px-3 py-1 mr-2 text-white border rounded-md border-theme-border bg-theme-bg-third focus:outline-none focus:shadow-outline placeholder-gray-700"
            placeholder="What's new..."
            value = {props.typedPostText}
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
