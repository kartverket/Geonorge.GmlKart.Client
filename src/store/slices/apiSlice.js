import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   loading: false
};

export const apiSlice = createSlice({
   name: 'api',
   initialState,
   reducers: {
      toggleLoading: (state, action) => {
         return { ...state, ...action.payload };
      }
   }
});

export const { toggleLoading } = apiSlice.actions;

export default apiSlice.reducer;