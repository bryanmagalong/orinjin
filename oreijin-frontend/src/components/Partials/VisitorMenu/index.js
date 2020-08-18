import React from 'react';

import { Link } from 'react-router-dom';

import {
  Image, Icon, Button,
} from 'semantic-ui-react';

import './styles.scss';
import logo from '../../../assets/images/logo.png';

const VisitorMenu = () => (
  <div className="header__container__desktop">
    <Button as={Link} to="/login" className="desktop__header__button" size="small" animated>
      <Button.Content visible>Connexion</Button.Content>
      <Button.Content hidden>
        <Icon name="sign-in" />
      </Button.Content>
    </Button>
    <div className="header__logo__desktop">
      <Image as={Link} to="/" className="header__logo" src={logo} centered size="small" />
    </div>
    <Button as={Link} to="/register" className="desktop__header__button" animated>
      <Button.Content visible>Inscription</Button.Content>
      <Button.Content hidden>
        <Icon name="signup" />
      </Button.Content>
    </Button>
  </div>
);

export default VisitorMenu;
