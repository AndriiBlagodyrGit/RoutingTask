import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, setDisplayName, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';

import { fetchUserInfo } from 'actions';
import UserPage from './UserPage';

export const enhance = compose(
  setDisplayName('UserPageContainer'),
  withRouter,
  connect(
    null,
    dispatch => ({
      fetchUserInfo: bindActionCreators(fetchUserInfo, dispatch),
    }),
  ),
  lifecycle({
    componentDidMount() {
      const { userId } = this.props.match.params;
      this.props.fetchUserInfo(userId);
    },
  }),
);

const UserPageContainer = enhance(UserPage);

export default UserPageContainer;
