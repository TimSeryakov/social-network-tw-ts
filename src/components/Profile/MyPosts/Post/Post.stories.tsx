import React from 'react';
import './../../../../styles/index.css'
import {Post} from "./Post";


export default {
    title: 'Post Story',
    component: Post,
};

export const PostStory = () => <Post text="Сбербанк выкупил актрису Зою Бербер и назвал Сбербербер." likesCount={29}/>
