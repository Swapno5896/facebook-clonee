import React from 'react';
import CreatePost from '../middleSections/CreatePost/CreatePost';
import Header from '../middleSections/header/Header';
import UserPosts from '../middleSections/userPosts/UserPosts';

const MiddleSection = () => {
    return (
        <div>
           <Header></Header>
           <CreatePost></CreatePost>
           <UserPosts></UserPosts>
        </div>
    );
};

export default MiddleSection;