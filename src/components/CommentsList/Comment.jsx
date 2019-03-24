import React from 'react';
import PropTypes from 'prop-types';

import CommentStyle from './CommentStyle';
import { BodyText, TitleText } from '../Texts';

const displayName = 'Comment';
const propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

const Comment = ({ name, email, body }) => (
  <CommentStyle>
    <TitleText>{name}</TitleText>
    <BodyText>{email}</BodyText>
    <BodyText>{body}</BodyText>
  </CommentStyle>
);

Comment.displayName = displayName;
Comment.propTypes = propTypes;

export default Comment;
