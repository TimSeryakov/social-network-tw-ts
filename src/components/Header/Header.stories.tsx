import React from 'react';
import './../../styles/index.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Header} from "./Header";

export default {
    title: 'Header',
    component: Header,
};

export const HeaderSection = () => <Header borders="trbl" isAuthDataFetching={false} isAuth={true} userLogin="User"/>
