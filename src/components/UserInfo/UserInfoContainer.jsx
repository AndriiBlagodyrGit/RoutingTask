import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, setDisplayName } from 'recompose';
import { getUserInfo } from 'selectors';
import UserInfo from './UserInfo';

export const enhance = compose(
  setDisplayName('UserInfoContainer'),
  withRouter,
  connect(
    state => ({
      ...getUserInfo(state),
    }),
    null,
  ),
);

const UserInfoContainer = enhance(UserInfo);

export default UserInfoContainer;
