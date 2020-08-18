import React from 'react';
import PropTypes from 'prop-types';

import {
  Button, Image, Grid, Icon,
} from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../../assets/images/logo3.png';
import './styles.scss';

const ConnectedMenu = ({ logout, userSlug, isAdmin }) => (
  <Grid columns={3} style={{ marginBottom: '1.5rem' }} className="header__container__connected">
    <Grid.Row style={{ padding: '0' }}>
      <Grid.Column width="6" className="header__navlink__group" verticalAlign="middle" textAlign="right">
        <NavLink to="/home" activeClassName="active" className="header__navlink">Accueil</NavLink>
        <NavLink exact to={`/user/${userSlug}`} activeClassName="active" className="header__navlink">Profil</NavLink>
        <NavLink exact to={`/user/${userSlug}/services`} activeClassName="active" className="header__navlink">Mes services</NavLink>
      </Grid.Column>

      <Grid.Column width="4" className="header__logo__connected" textAlign="center">
        <Image as={Link} to="/home" style={{ marginBottom: '0' }} className="header__logo" src={logo} centered size="small" />
      </Grid.Column>

      <Grid.Column width="6" className="header__logo__connected" verticalAlign="middle">
        <Button as={Link} to="/service/add" className="header__button__connected" size="small">
          <Button.Content>Créer un service</Button.Content>
        </Button>
        {
          // Displays admin button only if the connected user has permissions
          isAdmin && (
            <Button className="header__button__connected__admin" size="small">
              <a href="http://ec2-54-166-216-117.compute-1.amazonaws.com/login" target="_blank" rel="noopener noreferrer">Admin</a>
            </Button>
          )
        }
        <Button
          as={Link}
          to="/"
          className="header__button__connected"
          size="small"
          icon
          onClick={logout}
        >
          <Icon name="shutdown" />
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);


ConnectedMenu.propTypes = {
  logout: PropTypes.func.isRequired,
  userSlug: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default ConnectedMenu;
