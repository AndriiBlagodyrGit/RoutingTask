import { createSelector } from 'reselect';

const getUserInfo = createSelector(
  state => state.userInfo,
  userInfo => ({
    name: userInfo.name,
    username: userInfo.username,
    email: userInfo.email,
    phone: userInfo.phone,
    website: userInfo.website,
    company: userInfo.company,
    address: userInfo.address,
  }),
);
export default getUserInfo;
