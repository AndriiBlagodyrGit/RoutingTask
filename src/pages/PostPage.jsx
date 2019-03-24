import React from 'react';

import CommentsList from '../components/CommentsList';
import { HeaderText, Layout } from '../components';

const displayName = 'PostPage';

const PostPage = () => (
  <Layout>
    <HeaderText align="center">Post Details</HeaderText>
    <CommentsList />
  </Layout>
);

PostPage.displayName = displayName;

export default PostPage;
