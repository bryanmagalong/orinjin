// == Import npm
import React from 'react';

import {
  Header, Container, Card, Icon, Image,
} from 'semantic-ui-react';


// == Composant
const Team = () => (
  <Container>
    <Header as="h2" textAlign="center">Notre équipe</Header>
    <Card.Group centered itemsPerRow={2}>
      <Card style={{ width: '250px' }} raised>
        <Image style={{ height: '250px' }} src="https://res.cloudinary.com/orinjin/image/upload/v1588237092/assets/team/tofhln_akxobv.jpg" ui={false} />
        <Card.Content>
          <Card.Header>Hélène</Card.Header>
          <Card.Meta>
            Dev Backend/Symfony
          </Card.Meta>
          <Card.Description>
            En fin de formation dans une école incontournable dans le milieu du web, Hélène fait partie du duo 
            de développeurs backend, qui s'occupe de tout ce qui touche à Symfony coté serveur.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-david-6146939/">
            <Icon name="linkedin" />
            Me contacter
          </a>
        </Card.Content>
      </Card>
      <Card style={{ width: '250px' }} raised>
        <Image style={{ height: '250px' }} src="https://res.cloudinary.com/orinjin/image/upload/v1588237080/assets/team/20180927_130222_bvmwhv.jpg" ui={false} />
        <Card.Content>
          <Card.Header>Julien</Card.Header>
          <Card.Meta>
            Lead Dev Backend/Symfony
          </Card.Meta>
          <Card.Description>
          Julien se positionne comme le lead dev du duo de développeurs backend qui s'occupe de tout ce qui touche
          à Symfony coté serveur. Les bases de données, les routes et le Markdown n'ont presque plus aucun secret pour lui.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/julienspagnolo/">
            <Icon name="linkedin" />
            Me contacter
          </a>
        </Card.Content>
      </Card>
      <Card style={{ width: '250px' }} raised>
        <Image style={{ height: '250px' }} src="https://res.cloudinary.com/orinjin/image/upload/v1588237116/assets/team/90512568_567504274120685_2782522535835598848_n_kyrvpy.jpg" ui={false} />
        <Card.Content>
          <Card.Header>Bryan</Card.Header>
          <Card.Meta>
            Lead Dev Frontend/React
          </Card.Meta>
          <Card.Description>
            Créatif et posé Bryan fourmille de bonnes idées pour faire évoluer notre petite équipe de développeurs frontend qui s'occupe de tout ce qui touche
            à React et au coté client.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/bryan-magalong/">
            <Icon name="linkedin" />
            Me contacter
          </a>
        </Card.Content>
      </Card>
      <Card style={{ width: '250px' }} raised>
        <Image style={{ height: '250px' }} src="https://res.cloudinary.com/orinjin/image/upload/v1588237100/assets/team/photo_linkedin_jitwfn.jpg" ui={false} />
        <Card.Content>
          <Card.Header>Jonathan</Card.Header>
          <Card.Meta>
            Dev Frontend/React
          </Card.Meta>
          <Card.Description>
            C'est Jonathan qui est à l'orgine ce de projet d'entraide entre voisins. Il complète parfaitement Bryan, avec qui il forme un duo de choc de développeurs
            frontend. Ensemble ils gèrent la partie React et le coté client.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/jonathanraso/">
            <Icon name="linkedin" />
            Me contacter
          </a>
        </Card.Content>
      </Card>
    </Card.Group>
  </Container>
);

// == Export
export default Team;
