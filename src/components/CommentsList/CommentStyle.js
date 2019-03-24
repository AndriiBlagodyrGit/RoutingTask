import styled from 'styled-components';

import { FlexColumn } from '../Layouts';

const CommentStyle = styled(FlexColumn)`
  background-color: #cdd8da;
  flex-grow: 1;
  flex-basis: 340px;
  justify-content: space-between;
  max-width: 400px;
  height: auto;
  margin: 20px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export default CommentStyle;
