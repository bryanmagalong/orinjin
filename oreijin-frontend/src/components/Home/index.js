import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeVisitor from '../../containers/HomeVisitor';


const Home = ({ isLogged }) => (
  <div className="home">
    {isLogged ? <Redirect to="/home" /> : <HomeVisitor />}
  </div>
);

Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Home;
