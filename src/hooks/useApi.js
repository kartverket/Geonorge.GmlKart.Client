import axios from 'axios';
import { useModals } from 'context/ModalsContext';
import { useDispatch } from 'react-redux';
import { toggleLoading } from 'store/slices/apiSlice';

export default function useApi() {
   const { openModal } = useModals();
   const dispatch = useDispatch();

   async function sendAsync(url, data, options = {}) {
      try {
         dispatch(toggleLoading({ loading: true }));
         const defaultOptions = { method: 'post', url, data };
         const response = await axios({ ...defaultOptions, ...options });
         dispatch(toggleLoading({ loading: false }));

         return response.data || null;
      } catch (error) {
         dispatch(toggleLoading({ loading: false }));
         openModal('ERROR', { message: getMessage(error) });

         return null;
      }
   }

   function getMessage(error) {
      if (!error.response) {
         return error.message;
      }

      switch (error.response.status) {
         case 400:
            return error.response.data;
         default:
            return error.message;
      }
   }

   return sendAsync;
}
