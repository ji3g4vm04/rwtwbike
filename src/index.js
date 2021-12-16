import react from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import App from './components/app'
import store from './state';


render(
  <Provider
  store={store}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);