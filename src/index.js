import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Feed from './Feed/Feed';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Feed />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
