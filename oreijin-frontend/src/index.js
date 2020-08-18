// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

// == Import : local
// Component
import App from 'src/components/App';
// Store
import store from 'src/store';


// == Render
// 1. Root component (the one which contains every components of this app)
const rootComponent = (
  /* Provider component will let us access the store inside all components of this App */
  <Provider store={store}>
    {/* Router component allows us to use React-Router components in our App */}
    <Router>
      <App />
    </Router>
  </Provider>
);
// DOM target where our App component will be rendered
const target = document.getElementById('root');
// React render => DOM
render(rootComponent, target);
