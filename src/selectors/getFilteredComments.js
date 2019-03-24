import { createSelector } from 'reselect';
import getFilter from './getFilter';

const getFilteredComments = createSelector(
  state => state.comments,
  getFilter,
  (comments, filter) => (filter ? comments.filter(p => p.postId.toString() === filter) : comments),
);

export default getFilteredComments;
