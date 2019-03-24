import axios from 'axios';
import { createAction } from 'redux-actions';

const payloadCreator = userId => axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

const fetchUserInfoAsync = createAction('FETCH_USER_INFO', payloadCreator);

const fetchUserInfo = userId => dispatch => dispatch(fetchUserInfoAsync(userId));

fetchUserInfo.toString = fetchUserInfoAsync.toString;

export default fetchUserInfo;
