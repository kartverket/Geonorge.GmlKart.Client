import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   legend: {
      name: null,
      visible: true
   },
   sidebar: {
      visible: true
   },
   featureInfo: {
      expanded: false
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
      toggleLegend: (state, action) => {
         return { 
            ...state, 
            legend: {
               ...state.legend, ...action.payload
            }
         };
      },
      toggleFeatureInfo: (state, action) => {
         return {
            ...state, 
            featureInfo: {
               ...state.featureInfo, ...action.payload
            }
         }
      }
   }
});

export const { toggleSidebar, toggleLegend, toggleFeatureInfo } = mapSlice.actions;

export default mapSlice.reducer;