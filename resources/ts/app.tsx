import '../js/bootstrap.js';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './store';

import { App } from './components/App';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('app');
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <Provider store={ store }>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Provider>
  );
}
