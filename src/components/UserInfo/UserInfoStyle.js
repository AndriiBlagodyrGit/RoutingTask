import styled from 'styled-components';

import { FlexColumn } from '../Layouts';

const UserInfoStyle = styled(FlexColumn)`
  background-color: #cdd8da;
  flex-grow: 1;
  justify-content: space-between;
  max-width: 450px;
  height: auto;
  margin: auto;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  & > div {
    margin: 10px;
  }
`;

export default UserInfoStyle;
