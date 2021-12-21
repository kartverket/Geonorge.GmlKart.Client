import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ModalsProvider } from 'context/ModalsContext';
import App from './App';
import store from 'store';
import modals from 'components/modals/modals';
import 'config/projections.config';
import './index.scss';

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <ModalsProvider initialModals={modals}>
            <App />
         </ModalsProvider>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);

