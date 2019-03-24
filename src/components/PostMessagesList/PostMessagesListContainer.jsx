import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, setDisplayName } from 'recompose';
import { getPosts } from 'selectors';
import PostMessagesList from './PostMessagesList';

export const enhance = compose(
  setDisplayName('PostMessagesListContainer'),
  withRouter,
  connect(
    state => ({
      posts: getPosts(state),
    }),
    null,
  ),
);

const PostMessagesListContainer = enhance(PostMessagesList);

export default PostMessagesListContainer;
