import { createSelector } from 'reselect';

const getFilter = createSelector(
  state => state.filter,
  filter => filter,
);

export default getFilter;
