import { handleActions } from 'redux-actions';

export const initialUserInfoState = {};

const userInfo = handleActions(
  {
    FETCH_USER_INFO_FULFILLED: (state, { payload: { data } }) => data,
  },
  initialUserInfoState,
);

export default userInfo;
