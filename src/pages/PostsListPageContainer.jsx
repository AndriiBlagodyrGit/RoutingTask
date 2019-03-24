import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, setDisplayName, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';

import { fetchPosts } from 'actions';
import PostsListPage from './PostsListPage';

export const enhance = compose(
  setDisplayName('PostsListPageContainer'),
  withRouter,
  connect(
    null,
    dispatch => ({
      fetchPosts: bindActionCreators(fetchPosts, dispatch),
    }),
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchPosts();
    },
  }),
);

const PostsListPageContainer = enhance(PostsListPage);

export default PostsListPageContainer;
