import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Dropdown } from 'semantic-ui-react';

import './styles.scss';

const ConnectedDropdown = ({ logout, userSlug, isAdmin }) => (
  <Dropdown direction="left" text="Menu">
    <Dropdown.Menu>
      <Dropdown.Item as={Link} to="/home" text="Accueil" />
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to={`/user/${userSlug}`} text="Profil" />
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to={`/user/${userSlug}/services`} text="Mes services" />
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to="/service/add" text="Créer un service" />
      <Dropdown.Divider />
      {
        isAdmin && (
          <>
            <Dropdown.Item
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              href="http://ec2-54-166-216-117.compute-1.amazonaws.com/login"
              content="Admin"
            >
            </Dropdown.Item>
            <Dropdown.Divider />
          </>
        )
      }
      <Dropdown.Item as={Link} to="/" text="Se déconnecter" onClick={logout} />
    </Dropdown.Menu>
  </Dropdown>
);

ConnectedDropdown.propTypes = {
  logout: PropTypes.func.isRequired,
  userSlug: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default ConnectedDropdown;
