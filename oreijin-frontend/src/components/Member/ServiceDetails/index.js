/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Header, Segment, Form, TextArea, Comment,
  Label, Image, Divider, Button, Grid, Item,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Page404 from '../../404';
import './style.scss';
import Response from '../../../containers/Response';
import Validator from '../../../validator';

const ServiceDetails = ({
  onChangeFieldReply, reply,
  id,
  getService, service,
  category, getCategoriesList,
  addComment, isError, replyFormError,
  notFound,
  avatar,

}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!category) getCategoriesList();
    getService(id);
  }, []);

  if (notFound) return <Page404 />;

  return (
    <Segment as={Container} className="service" raised>
      <Grid container centered stackable>
        <Grid.Row>
          <Header style={{ fontSize: '1.5rem' }} as="h1" sub>{service.title}</Header>
          <Container style={{ marginTop: '0.7rem' }}>
            <Label color={service.type ? 'teal' : 'purple'}>
              {service.type ? 'Proposition' : 'Demande' }
            </Label>
            <Label style={{ color: '#f2c00f', backgroundColor: '#423E37' }}>
              {category && category.title}
            </Label>
          </Container>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={9} as={Item.Group}>
            <Item>
              <Item.Image className="service__details__avatar" src={avatar} size="small" />
              <Item.Content className="service__user__content" verticalAlign="middle">
                <Item.Header>{service.user.firstName} {service.user.lastName}</Item.Header>
                <Item.Meta><Icon name="map marker alternate" /> {service.user.postalCode} - {service.user.city}</Item.Meta>
              </Item.Content>
            </Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider horizontal>
        <Header as="h5">
          Description
        </Header>
      </Divider>

      <Grid>
        <Grid.Row>
          <Grid.Column as={Container} textAlign="left" className="padding--left--right">
            {service.body}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {
        // photo is optionnal
        // if there's no photo, we don't display the photo section
        service.image && (
          <>
            <Divider horizontal>
              <Header as="h5">
                Photo
              </Header>
            </Divider>
            <Grid centered>
              <Grid.Row>
                <Image src={service.image} size="large" />
              </Grid.Row>
            </Grid>
          </>
        )
      }

      <Divider horizontal>
        <Header as="h5">
          Réponses
        </Header>
      </Divider>

      <Grid>
        <Grid.Row>
          <Grid.Column as={Comment.Group} className="padding--left--right">
            {
              // Comments display
              service.comment.length === 0 ? 'Soyez la première personne à répondre à ce service.' : service.comment.map((item) => <Response key={`${item.id}-comment`} {...item} />)
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider horizontal>
        <Header as="h5">
          Répondre
        </Header>
      </Divider>

      <Grid>
        <Grid.Row>
          <Grid.Column
            as={Form}
            reply
            onSubmit={(evt) => {
              evt.preventDefault();
              if (Validator.checkReply(reply)) addComment();
              else replyFormError();
            }}
          >
            {
              isError && reply === '' && <Label basic color="red" pointing="below">Entrez un commentaire</Label>
            }
            {
              !Validator.checkReply(reply) && reply !== '' ? <Label basic color="red" pointing="below">Votre réponse est trop longue. (maximum 140 caractères)</Label> : null
            }
            <TextArea
              placeholder="Envoyer une réponse"
              value={reply}
              onChange={(evt) => {
                onChangeFieldReply(evt.target.value);
              }}
            />
            <Button className="service__details__button" labelPosition="left" icon>
              <Icon name="reply" />
              Envoyer
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Container>
        <Link className="redirection__link" to="/home">Retour à l'accueil</Link>
      </Container>
    </Segment>
  );
};

// À modifier
ServiceDetails.defaultProps = {
  category: null,
};

ServiceDetails.propTypes = {
  commentListLength: PropTypes.number.isRequired,
  onChangeFieldReply: PropTypes.func.isRequired,
  reply: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  getService: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired,
  category: PropTypes.object,
  getCategoriesList: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  notFound: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  replyFormError: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ServiceDetails;
