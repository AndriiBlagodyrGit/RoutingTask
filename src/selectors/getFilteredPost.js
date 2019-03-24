import { createSelector } from 'reselect';
import getFilter from './getFilter';

const getFilteredPost = createSelector(
  state => state.posts,
  getFilter,
  (posts, filter) => (filter ? posts.filter(p => p.id.toString() === filter) : posts),
);

export default getFilteredPost;
