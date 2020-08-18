import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Button, Form, Container, Segment, Header, Message,
} from 'semantic-ui-react';
import Validator from '../../../validator';
import './styles.scss';

const Login = ({
  changeField,
  handleLogin,
  username,
  password,
  isLogged,
  loading,
  loginFormError,
  errors,
}) => {
  const history = useHistory();
  const handleSubmit = () => {
    if (Validator.checkEmail(username) && Validator.checkPassword(password)) handleLogin();
    else loginFormError(['Votre email ou mot de passe est invalide !']);
  };

  // Called everytime 'isLogged' changes
  useEffect(() => {
    // Redirect to page '/home' after submit
    // We redirect to /home only if isLogged is true
    if (isLogged) history.push('/home');
  }, [isLogged, errors.length]);

  return (
    <Container>
      <Segment className="login__segment" raised>
        <Header as="h1" dividing textAlign="center">Connexion</Header>
        <Form className="login__form" onSubmit={handleSubmit}>
          <Form.Input
            className="login__form__input"
            required
            type="email"
            name="username"
            label="Email"
            placeholder="Entrez votre adresse mail"
            value={username}
            onChange={(event) => {
              changeField(event.target.value, event.target.name);
            }}
          />
          <Form.Input
            className="login__form__input"
            required
            type="password"
            name="password"
            label="Mot de passe"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(event) => {
              changeField(event.target.value, event.target.name);
            }}
          />
          <Button loading={loading} className="login__form__button">Connexion</Button>
        </Form>
        <Message error hidden={errors.length === 0} content={errors[0]} />
      </Segment>
    </Container>
  );
};


Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  loginFormError: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
};

export default Login;
