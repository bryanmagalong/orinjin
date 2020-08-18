// == Import npm
import React from 'react';

// == Import component from semantic-ui-react
import {
  Container, Image, Header, Button, Modal, Icon,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

// == Import styles and assets
import './styles.scss';
import auth from '../../auth';
import fusion from '../../assets/images/fusion.jpg';

// == Component
const Page404 = () => (
  <Container textAlign="center">
    <Header as="h1">
      Oups, page introuvable !
      <Header.Subheader>
        La page que vous recherchez ne semble pas / plus exister. Pas de panique, vous pouvez toujours revenir en arrière !
      </Header.Subheader>
    </Header>
    <Image style={{ marginBottom: '1rem' }} src="https://media.giphy.com/media/xT9IgFWN8DXgWvqvBK/giphy.gif" alt="logo" rounded centered />
    <Modal trigger={<Button className="error__button">Retour à l'accueil</Button>} basic size="small">
      <Modal.Content>
        <p>
          Nos techniciens les plus chevronnés font tout leur possible pour mettre à jour cette page,
          merci de votre compréhension.
        </p>
        <Image
          centered
          size="large"
          src={fusion}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button as={Link} to={auth.isAuthenticated() ? '/home' : '/'} basic color="red" inverted>
          <Icon name="remove" /> brand id
        </Button>
        <Button as={Link} to={auth.isAuthenticated() ? '/home' : '/'} color="green" inverted>
          <Icon name="checkmark" /> de morue
        </Button>
      </Modal.Actions>
    </Modal>
  </Container>

);

// == Export
export default Page404;
