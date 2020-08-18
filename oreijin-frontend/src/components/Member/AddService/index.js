import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Header, Container, Segment, Form, Button, Select, Radio, Message, Label,
} from 'semantic-ui-react';

import { Link, Redirect } from 'react-router-dom';

import Validator from '../../../validator';

import './styles.scss';

const AddService = ({
  form, onChangeField, onChangeFieldType,
  addService, isSuccess, isError, resetServiceForm,
  categories, getCategoriesList, errors, userSlug,
  uploadServiceImage,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Get a list of categories and reset form's inputs
    getCategoriesList();
    resetServiceForm();
  }, []);

  // The hook useState is used for uploading image if
  // the user wants to add an image when creating a service
  const [file, setFile] = useState(null);
  // createRef is used with the button for uploading
  // an image when creating a new service
  const fileInputRef = React.createRef();

  return (
    <Container>
      {
        // If the service has been created, redirect the user to his service's list
        isSuccess && <Redirect to={`/user/${userSlug}/services`} />
      }
      <Segment raised>
        <Header as="h1" dividing textAlign="center">Créer un service</Header>
        <Form
          onSubmit={(evt) => {
            evt.preventDefault();
            if (Validator.checkServiceForm(form, categories)) {
              // if an image has been selected -> upload image + add service
              // else, add service only
              if (file) uploadServiceImage(file);
              else addService({ user: form.user });
            }
          }}
          success
          error
        >
          <Message
            success
            // Show this message only if the service has been created
            hidden={!isSuccess}
            header="Création d'un service réussi !"
            content="Vous n'avez plus qu'a attendre une réponse d'un de nos utilisateurs ! Vous serez redirigé vers la page ..."
          />
          <Message
            error
            // Show this message only if the service has not been created
            hidden={!isError}
          >
            <Message.Header>La création du service a échoué !</Message.Header>
            {
              // Display error message list
              errors.map((error) => (
                <div key={error}>{error}</div>
              ))
            }
          </Message>
          <Form.Field width={16}>
            {
              form.title !== '' && !Validator.checkServiceTitle(form.title) ? <Label basic color="red" pointing="below">Indiquez un titre valide (entre 10 et 60 caractères). Caractères spéciaux autorisés : -!?'.,</Label> : null
            }
            <Form.Input
              required
              label="Intitulé du service"
              placeholder="Intitulé du service (entre 10 et 60 caractères)"
              type="text"
              name="title"
              onChange={(evt) => {
                // Checking every change for this input, in order to have a controlled component
                onChangeField(evt.target.name, evt.target.value);
              }}
              value={form.title}
            />
          </Form.Field>
          {
            !form.serviceCategory ? <Label basic color="red" pointing="below">Sélectionnez une catégorie.</Label> : null
          }
          <Form.Group>
            <Form.Field
              required
              width={8}
              control={Select}
              label="Catégorie"
              options={categories}
              placeholder="Choisir une catégorie"
              name="category"
              onChange={(evt, { value }) => {
                onChangeField('serviceCategory', value);
              }}
            />
            <Form.Group grouped>
              <Form.Field>
                Type de service
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Demande"
                  name="type"
                  value={0}
                  checked={form.type === false}
                  onChange={(evt, { value }) => {
                    onChangeFieldType(value);
                  }}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Proposition"
                  name="type"
                  value={1}
                  checked={form.type === true}
                  onChange={(evt, { value }) => {
                    onChangeFieldType(value);
                  }}
                />
              </Form.Field>
            </Form.Group>
          </Form.Group>
          <Form.Field>
            <Button
              content="Choisir une photo"
              className="profil__import__button"
              size="small"
              type="button"
              // When this button is clicked, it also simulates a click event
              // on the DOM node attached to fileInputRef
              // In this instance, fileInputRef refers to the input element below
              onClick={() => fileInputRef.current.click()}
            />
            {
              (file && !Validator.checkImageSize(file)) ? <Label basic color="red">Votre image est trop lourde. (2Mb max)</Label> : null
            }
            {
              (file && Validator.checkImageSize(file)) ? <Label>{file.name}</Label> : null
            }
            <input
              ref={fileInputRef}
              type="file"
              hidden
              accept=".jpg, .jpeg, .png"
              name="avatar"
              onChange={(evt) => {
                setFile(evt.target.files[0]);
              }}
            />
          </Form.Field>
          {
            form.body !== '' && !Validator.checkServiceDescription(form.body) ? <Label basic color="red" pointing="below">Indiquez une description valide. (entre 50 et 280 caractères)</Label> : null
          }
          <Form.TextArea
            required
            label="Description du service"
            placeholder="Ajoutez une description (entre 50 et 280 caractères)"
            value={form.body}
            name="body"
            onChange={(evt) => {
              onChangeField(evt.target.name, evt.target.value);
            }}
            style={{ minHeight: 150 }}
          />
          {/* TODO loading={loading}  */}
          <Button as={Link} to="/home" secondary disabled={isSuccess}>Annuler</Button>
          <Button type="submit" className="register__form__button" disabled={isSuccess}>Valider</Button>
        </Form>
      </Segment>
    </Container>
  );
};

AddService.propTypes = {
  form: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    type: PropTypes.bool.isRequired,
    image: PropTypes.string,
    user: PropTypes.number,
    serviceCategory: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onChangeFieldType: PropTypes.func.isRequired,
  addService: PropTypes.func.isRequired,
  resetServiceForm: PropTypes.func.isRequired,
  getCategoriesList: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  userSlug: PropTypes.string.isRequired,
  uploadServiceImage: PropTypes.func.isRequired,
};

export default AddService;
