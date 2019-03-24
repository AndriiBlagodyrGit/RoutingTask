import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, setDisplayName } from 'recompose';
import { getFilteredPost, getFilteredComments } from 'selectors';
import CommentsList from './CommentsList';

export const enhance = compose(
  setDisplayName('CommentsListContainer'),
  withRouter,
  connect(
    (state, props) => ({
      post: getFilteredPost(state, props.match.params.postId),
      comments: getFilteredComments(state, props.match.params.postId),
    }),
    null,
  ),
);

const CommentsListContainer = enhance(CommentsList);

export default CommentsListContainer;
