import React from 'react';
import PropTypes from 'prop-types';

import PostMessage from './PostMessage';
import PostMessagesListStyle from './PostMessagesListStyle';

const displayName = 'PostMessagesList';
const propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const PostMessagesList = ({ posts }) => (
  <PostMessagesListStyle>
    {posts.map(post => (
      <PostMessage userId={post.userId} id={post.id} key={post.id} title={post.title} body={post.body} />
    ))}
  </PostMessagesListStyle>
);

PostMessagesList.displayName = displayName;
PostMessagesList.propTypes = propTypes;

export default PostMessagesList;
