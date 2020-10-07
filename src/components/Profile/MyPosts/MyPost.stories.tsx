import React from 'react';
import './../../../styles/index.css'
import {MyPosts} from "./MyPosts";
import {state} from '../../../redux/state'

export default {
  title: 'MyPosts',
  component: MyPosts,
};

export const MyPostsStory = () => <MyPosts borders="trbl" postsData={state.profilePage.postsData}/>
