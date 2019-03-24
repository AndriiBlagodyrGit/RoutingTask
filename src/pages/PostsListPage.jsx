import React from 'react';
import PostMessagesList from '../components/PostMessagesList';
import { HeaderText, Layout } from '../components';

const displayName = 'PostsListPage';

const PostsListPage = () => (
  <Layout>
    <HeaderText align="center">Posts List</HeaderText>
    <PostMessagesList />
  </Layout>
);

PostsListPage.displayName = displayName;

export default PostsListPage;
