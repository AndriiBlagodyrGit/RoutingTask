import React from 'react';
import PropTypes from 'prop-types';

import { DocumentTitleText, DocumentBodyText } from '../Texts';
import { Row } from '../Layouts';
import UserInfoStyle from './UserInfoStyle';

const displayName = 'UserInfo';
const propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.shape({
    name: PropTypes.string,
    catchPhrase: PropTypes.string,
    bs: PropTypes.string,
  }),
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
  }),
};

const defaultProps = {
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
  company: {},
  address: {},
};

const UserInfo = ({
  name, username, email, phone, website, company, address,
}) => (
  <UserInfoStyle>
    <Row>
      <DocumentTitleText>Name:</DocumentTitleText>
      <DocumentBodyText>{name}</DocumentBodyText>
    </Row>
    <Row>
      <DocumentTitleText>UserName:</DocumentTitleText>
      <DocumentBodyText>{username}</DocumentBodyText>
    </Row>
    <Row>
      <DocumentTitleText>Email:</DocumentTitleText>
      <DocumentBodyText>{email}</DocumentBodyText>
    </Row>
    {address
      && Object.keys(address).map(
        key => typeof address[key] === 'string' && (
        <Row key={key}>
          <DocumentTitleText>
            {' '}

                Address
            {key}
:
          </DocumentTitleText>
          <DocumentBodyText>{address[key]}</DocumentBodyText>
        </Row>
        ),
      )}
    <Row>
      <DocumentTitleText>Phone:</DocumentTitleText>
      <DocumentBodyText>{phone}</DocumentBodyText>
    </Row>
    <Row>
      <DocumentTitleText>Website:</DocumentTitleText>
      <DocumentBodyText>{website}</DocumentBodyText>
    </Row>
    {company
      && Object.keys(company).map(key => (
        <Row key={key}>
          <DocumentTitleText>
            {' '}

            Company
            {key}
:
          </DocumentTitleText>
          <DocumentBodyText>{company[key]}</DocumentBodyText>
        </Row>
      ))}
  </UserInfoStyle>
);

UserInfo.displayName = displayName;
UserInfo.propTypes = propTypes;
UserInfo.defaultProps = defaultProps;

export default UserInfo;
