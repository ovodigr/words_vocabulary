import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { setupStore } from './toolkitSlice/index';

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


    // <meta property="og:title" content="vocabulary and translate words" />
    // <meta property="og:description" content="On this site you can add new words with translate. Learn English together" />
    // <meta property="og:type" content="website" />
    // <meta property="og:url" content="https://peak.pp.ua/words/" />
    // <meta property="og:image" content="https://ieltsbands.com/wp-content/uploads/2017/07/English-words-vocabulary.jpg" />
    // <meta property="fb:app_id" content="3241848699391516" />