import axios from 'axios';
import { createAction } from 'redux-actions';

const payloadCreator = () => axios.get('https://jsonplaceholder.typicode.com/posts');

const fetchPostsAsync = createAction('FETCH_POSTS', payloadCreator);

const fetchPosts = () => dispatch => dispatch(fetchPostsAsync());

fetchPosts.toString = fetchPostsAsync.toString;

export default fetchPosts;
