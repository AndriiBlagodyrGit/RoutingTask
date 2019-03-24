import { handleActions } from 'redux-actions';

export const initialPostsState = [];

const posts = handleActions(
  {
    FETCH_POSTS_FULFILLED: (state, { payload: { data } }) => data,
  },
  initialPostsState,
);

export default posts;
