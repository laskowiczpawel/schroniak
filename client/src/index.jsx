// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/Router';
import createBrowserHistory from 'history/createBrowserHistory';
import Switch from 'react-router-dom/Switch';

// WebFont Loader
import WebfontLoader from '@dr-kobros/react-webfont-loader';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

// Views
import Index from './views/Index/Index';
import Home from './views/Home/Home';

// Main styles import.
import './scss/global.scss';

// Middleware
/* eslint-disable no-underscore-dangle */
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

// WebFont Loader configuration.
const config = {
  google: {
    families: ['Roboto:300,400,500,900:latin,latin-ext'],
  },
};

const customHistory = createBrowserHistory();

ReactDOM.render(
  <WebfontLoader config={config}>
    <Provider store={store}>
      <Router history={customHistory}>
        <Index>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Index>
      </Router>
    </Provider>
  </WebfontLoader>,
  document.querySelector('.container'),
);
