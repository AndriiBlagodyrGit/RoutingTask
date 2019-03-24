import React from 'react';

import UserInfo from '../components/UserInfo';
import { HeaderText, Layout } from '../components';

const displayName = 'UserPage';

const UserPage = () => (
  <Layout>
    <HeaderText align="center">User Details</HeaderText>
    <UserInfo />
  </Layout>
);

UserPage.displayName = displayName;

export default UserPage;
