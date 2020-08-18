import React from 'react';

import { Link } from 'react-router-dom';

import { Dropdown } from 'semantic-ui-react';

const VisitorMenu = () => (
  <Dropdown direction="left" text="Menu">
    <Dropdown.Menu>
      <Dropdown.Item as={Link} to="/" text="Accueil" />
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to="/login" text="Connexion" />
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to="/register" text="Inscription" />
    </Dropdown.Menu>
  </Dropdown>
);

export default VisitorMenu;
