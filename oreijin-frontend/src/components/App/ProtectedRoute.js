import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import auth from '../../auth';

// Route that will render the component from props or will redirect to login page
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (auth.isAuthenticated()) {
        // We pass props to Component to allow 'ownProps' use in containers
        return <Component {...props} />;
      }
      return <Redirect to="/login" />;
    }}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.object.isRequired,
};

export default ProtectedRoute;
