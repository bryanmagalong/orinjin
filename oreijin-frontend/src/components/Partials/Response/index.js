// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
// == Import components that we need to use from Semantic-UI-React
import { Comment } from 'semantic-ui-react';
// == import prop-types library for prop types validation
import PropTypes from 'prop-types';

// == Import styles and assets
import logo from '../../../assets/images/logo.svg';

// == Component
const Response = ({
  body, user,
}) => (
  <Comment>
    <Comment.Avatar src={user.avatar ? user.avatar : logo} />
    <Comment.Content>
      <Comment.Author as={Link} to={`/user/${slugify(`${user.firstName} ${user.lastName} ${user.id}`, { lower: true })}`}>
        {user.firstName} {user.lastName}
      </Comment.Author>
      <Comment.Metadata>
      </Comment.Metadata>
      <Comment.Text>
        {body}
      </Comment.Text>
    </Comment.Content>
  </Comment>
);

Response.propTypes = {
  body: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};
// == Export
export default Response;
