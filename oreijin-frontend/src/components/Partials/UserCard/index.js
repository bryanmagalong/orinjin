// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import { Card } from 'semantic-ui-react';
// == import prop-types library for prop types validation
import PropTypes from 'prop-types';

// == Import styles and assets
import logo from '../../../assets/images/logo.png';

// == Component
const UserCard = ({ userName, pc }) => (
  <Card
    image={logo}
    header={userName}
    meta={pc}
    description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
  />
);

// == Props types validation
UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  pc: PropTypes.number.isRequired,
};

// == Export
export default UserCard;
