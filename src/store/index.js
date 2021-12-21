import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './slices/apiSlice';
import mapReducer from './slices/mapSlice';

export default configureStore({
   reducer: {
      api: apiReducer,
      map: mapReducer,
   }
});