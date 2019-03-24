import {
  createStore, compose, applyMiddleware, combineReducers,
} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import {
  comments,
  initialCommentsState,
  posts,
  initialPostsState,
  userInfo,
  initialUserInfoState,
  filter,
  initialFilterState,
} from 'reducers';
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, promiseMiddleware()));

export const initialStoreState = {
  comments: initialCommentsState,
  posts: initialPostsState,
  userInfo: initialUserInfoState,
  filter: initialFilterState,
};

const store = createStore(
  combineReducers({
    comments,
    posts,
    userInfo,
    filter,
  }),
  initialStoreState,
  enhancer,
);

export default store;
