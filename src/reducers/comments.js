import { handleActions } from 'redux-actions';

export const initialCommentsState = [];

const comments = handleActions(
  {
    FETCH_COMMENTS_FULFILLED: (state, { payload: { data } }) => data,
  },
  initialCommentsState,
);

export default comments;
