import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './global.css';
import App from './routes/App';
import registerServiceWorker from './startup/registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
