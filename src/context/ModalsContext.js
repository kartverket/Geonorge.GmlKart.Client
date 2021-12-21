import React, { useContext, useState } from 'react';

const initialState = {
   closeModal: () => {
      throw new Error('Not implemented');
   },
   openModal: () => {
      throw new Error('Not implemented');
   },
   addModal: () => {
      throw new Error('Not implemented');
   }
};

export const ModalsProvider = ({ children, initialModals = {} }) => {
   const [modals, setModals] = useState(initialModals);
   const [modal, setModal] = useState([]);

   const addModal = (key, modalComponent) => {
      setModals((state) => ({ ...state, key }));
   };

   const openModal = (key, props = {}) => {
      setModal((state) => [...state, {
         key,
         component: modals[key],
         props
      }]);
   };

   const closeModal = (key) => {
      if (key === undefined) {
         setModal([]);
      } else {
         setModal((state) => state.filter((item) => item.key !== key));
      }
   };

   return (
      <ModalsContext.Provider value={{ addModal, openModal, closeModal }}>
         {modal.map(item => (
            <item.component {...item.props} open key={item.key} />
         ))}
         {children}
      </ModalsContext.Provider>
   );
};

export const ModalsContext = React.createContext(initialState);
export const useModals = () => useContext(ModalsContext);
