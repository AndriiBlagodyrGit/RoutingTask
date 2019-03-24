import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import CommentsListStyle from './CommentsListStyle';
import { TitleText, BodyText } from '../Texts';
import { FlexColumn, Row } from '../Layouts';

const displayName = 'CommentsList';
const propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number,
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string,
    }),
  ).isRequired,
  post: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  ),
};
const defaultProps = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      title: '',
      body: '',
    }),
  ),
};

const CommentsList = ({ comments, post }) => (
  <CommentsListStyle>
    {post.length > 0 && (
      <FlexColumn>
        <TitleText>

          Title:
          {post[0].title}
        </TitleText>
        <BodyText>

          Body:
          {post[0].body}
        </BodyText>
      </FlexColumn>
    )}
    <Row>
      {comments.map(comment => (
        <Comment name={comment.name} key={comment.id} email={comment.email} body={comment.body} />
      ))}
    </Row>
  </CommentsListStyle>
);

CommentsList.displayName = displayName;
CommentsList.propTypes = propTypes;
CommentsList.defaultProps = defaultProps;

export default CommentsList;
