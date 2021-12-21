import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   symbol: {
      name: null,
      visible: true
   },
   sidebar: {
      visible: true
   }
};

export const mapSlice = createSlice({
   name: 'map',
   initialState,
   reducers: {
      toggleSidebar: (state, action) => {
         return { 
            ...state, 
            sidebar: {
               ...state.sidebar, ...action.payload
            }
         };
      },
      toggleSymbol: (state, action) => {
         return { 
            ...state, 
            symbol: {
               ...state.symbol, ...action.payload
            }
         };
      }
   }
});

export const { toggleSidebar, toggleSymbol } = mapSlice.actions;

export default mapSlice.reducer;