import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, setDisplayName, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';

import { fetchComments, changeFilter } from 'actions';
import PostPage from './PostPage';

export const enhance = compose(
  setDisplayName('PostPageContainer'),
  withRouter,
  connect(
    null,
    dispatch => ({
      fetchComments: bindActionCreators(fetchComments, dispatch),
      changeFilter: bindActionCreators(changeFilter, dispatch),
    }),
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchComments();
      this.props.changeFilter(this.props.match.params.postId);
    },
  }),
);

const PostPageContainer = enhance(PostPage);

export default PostPageContainer;
