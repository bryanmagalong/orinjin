// == Import npm
import React, { useState } from 'react';
import slugify from 'slugify';
// == Import components that we need to use from Semantic-UI-React
import {
  Feed, Segment, Icon, Responsive, Button, Grid, Image, Divider, Header,
  Label, Confirm,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// == import prop-types library for prop types validation
import PropTypes from 'prop-types';

import auth from '../../../auth';
// == Import styles and assets
import './styles.scss';
import logo from '../../../assets/images/logo3.png';

// == Component
const Service = ({
  id, title, body, type,
  slug, userServices, onDeleteService, serviceCategory, user,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Feed as={Segment}>
      <Grid stackable className="service" textAlign="center">
        {/* If we are in user services page : column will take width: 12 */}
        {/* Else, column will take all the width  */}
        <Grid.Column width={userServices ? 12 : 16}>
          <Header as="h4">
            <Image size="mini" src={user.avatar ? user.avatar : logo} circular />
            <Header.Content
              className="service__creator"
              as={Link}
              to={`/user/${slugify(`${user.firstName} ${user.lastName} ${user.id}`, { lower: true })}`}
            >
              {`${user.firstName} ${user.lastName}`}
            </Header.Content>
          </Header>
          <Feed.Event
            as={Link}
            to={auth.isAuthenticated() ? `/service/${slug}` : '/'}
            className="service__feed"
          >
            <Feed.Content>
              <Feed.Summary style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
                {title}
                {/* <Feed.User>{` - ${created_by}`}</Feed.User> */}
              </Feed.Summary>
              <Feed.Extra text className="service__category">
                <Label color={type ? 'teal' : 'purple'}>
                  {type ? 'Proposition' : 'Demande'}
                </Label>
                <Label style={{ color: '#f2c00f', backgroundColor: '#423E37' }}>
                  { serviceCategory.title }
                </Label>
              </Feed.Extra>
              <Responsive as={Feed.Extra} text minWidth={550}>
                <Divider className="service__info__divider" horizontal>
                  <Header as="h5">
                    Description
                  </Header>
                </Divider>
                {body}
              </Responsive>
              <Feed.Meta style={{ marginTop: '1rem' }}>
                <Icon name="map marker alternate" />{ user.postalCode }
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </Grid.Column>
        {
          // Display buttons only on user services page
          userServices && (
            <Grid.Column width={4} textAlign="right">
              <Button as={Link} to={`/service/edit/${slug}`} className="user__services__edit" size="tiny" icon><Icon name="edit" /></Button>
              <Button
                color="red"
                size="tiny"
                icon="delete"
                onClick={() => setOpen(true)}
              />
              <Confirm
                confirmButton="Confirmer"
                cancelButton="Annuler"
                open={open}
                content="La suppression de votre service est définitive. Vous perdrez toutes les informations liées à ce service. Confirmer la suppression du service ?"
                onCancel={() => setOpen(false)}
                onConfirm={() => {
                  onDeleteService(id);
                  setOpen(false);
                }}
              />
            </Grid.Column>
          )
        }
      </Grid>
    </Feed>
  );
};

// Default props declaration for optionnal props
Service.defaultProps = {
  slug: '',
  userServices: false,
};

// == Props types validation
Service.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
  onDeleteService: PropTypes.func.isRequired,
  slug: PropTypes.string,
  userServices: PropTypes.bool,
  user: PropTypes.object.isRequired,
  serviceCategory: PropTypes.object.isRequired,
};

// == Export
export default Service;
