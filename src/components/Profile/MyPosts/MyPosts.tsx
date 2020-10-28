import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from "./Post/Post"
import {ActionsTypes, PostsDataType} from "../../../redux/store-handmade";
import {BordersPropsType, parseBordersProps} from "../../common/utils/parseBordersProps";
import {addPostAC, updateTypedPostTextAC} from "../../../redux/profile-reducer";
import {scroller} from 'react-scroll';


type PropsType = {
  postsData: Array<PostsDataType>
  typedPostText: string
  borders: BordersPropsType
  dispatch: (action: ActionsTypes) => void
}


export function MyPosts (props: PropsType) {

  const postsList = props.postsData.map(post => <Post text={post.text} likesCount={post.likesCount}/>).reverse()

  const onAddPostClick = () => {
    if (props.typedPostText) {
      props.dispatch(addPostAC())

      scroller.scrollTo('add-post-textarea', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })

    }
  }

  const onAddPostTextAreaChange = (e:ChangeEvent<HTMLTextAreaElement>) => { // onPostChange у Димы
    props.dispatch(updateTypedPostTextAC(e.currentTarget.value))
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
