import React from 'react';
import {Post} from "./Post/Post"
import {BordersPropsType, parseBordersProps} from "../../../helpers/parseBordersProps";
import {scroller} from 'react-scroll';
import {PostDataType} from "../../../redux/profile-reducer";
import AddPostsForm, {AddPostsFormDataType} from "./AddPostsForm";


type PropsType = {
    borders: BordersPropsType
    postsData: PostDataType[] // Array<PostDataType>
    addPost: (newPost: string) => void
}


export function MyPosts(props: PropsType) {

    const postsList = props.postsData.map(post => <Post key={post.id} text={post.text}
                                                        likesCount={post.likesCount}/>).reverse()



    const onAddPostClick = (formData: AddPostsFormDataType) => {
        if (formData.addPostTextareaValue) {
            props.addPost(formData.addPostTextareaValue)

            scroller.scrollTo("add-post-textarea", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart"
            })
        }
    }


    return (
        <section className={`${parseBordersProps(props.borders)} text-theme-text bg-theme-bg-primary`}
                 id="add-post-textarea"
        >

            <AddPostsForm onSubmit={onAddPostClick} />

            <div className="px-4 pt-4 pb-8">

                {postsList}

            </div>
        </section>
    )
}
