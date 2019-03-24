import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLink, TitleText, BodyText } from 'components';
import { Row } from '../Layouts';
import PostMessageStyle from './PostMessageStyle';

const displayName = 'PostMessage';
const propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

const PostMessage = ({
  userId, id, title, body,
}) => (
  <PostMessageStyle>
    <TitleText align="center">{title}</TitleText>
    <BodyText>{body}</BodyText>
    <Row>
      <ButtonLink to={`/posts/${id}`}>Post Details</ButtonLink>
      <ButtonLink to={`/users/${userId}`}>User Details</ButtonLink>
    </Row>
  </PostMessageStyle>
);

PostMessage.displayName = displayName;
PostMessage.propTypes = propTypes;

export default PostMessage;
