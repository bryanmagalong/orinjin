// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import {
  Feed, Segment, Responsive, Grid, Image, Divider, Header,
  Label,
} from 'semantic-ui-react';

// == import prop-types library for prop types validation
import PropTypes from 'prop-types';

// == Import styles and assets
import logo from '../../../assets/images/logo.svg';

// == Component
const ServiceVisitor = ({
  title, body, type,
  serviceCategory, user,
}) => (
  <Feed as={Segment}>
    <Grid stackable>
      {/* If we are in user services page : column will take width: 12 */}
      {/* Else, column will take all the width  */}
      <Grid.Column width={16} textAlign="center">
        <Header as="h4">
          <Image size="mini" src={user.avatar || logo} circular />
          <Header.Content>
            {user.firstName}
          </Header.Content>
        </Header>
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary className="service__title">
              {title}
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
          </Feed.Content>
        </Feed.Event>
      </Grid.Column>
    </Grid>
  </Feed>
);

// == Props types validation
ServiceVisitor.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  serviceCategory: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
};

// == Export
export default ServiceVisitor;
