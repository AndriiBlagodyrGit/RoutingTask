import { createSelector } from 'reselect';

const getPosts = createSelector(
  state => state.posts,
  posts => posts,
);

export default getPosts;
