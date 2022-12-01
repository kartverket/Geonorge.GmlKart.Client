import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ModalsProvider } from 'context/ModalsContext';
import App from './App';
import store from 'store';
import modals from 'components/modals/modals';
import 'config/projections.config';
import 'config/extents.config';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <ModalsProvider initialModals={modals}>
            <App />
         </ModalsProvider>
      </Provider>
   </React.StrictMode>
);


