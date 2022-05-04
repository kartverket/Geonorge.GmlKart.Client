import React from 'react';
import { useApi } from 'hooks';
import { useModals } from 'context/ModalsContext';
import { getFileSize, isValidFileType } from 'utils/map/helpers';
import './Upload.scss';

const API_URL = process.env.REACT_APP_API_URL;
const MAX_FILE_SIZE = process.env.REACT_APP_MAX_FILE_SIZE;

function Upload({ onResponse }) {
   const sendAsync = useApi();
   const { openModal } = useModals();

   async function handleFileChange(event) {
      const file = event.target.files[0];

      if (!file) {
         return;
      }

      if (file.size > MAX_FILE_SIZE) {
         openModal('INVALID_FILE', { 
            message: `Filen '${file.name}' er for stor (${getFileSize(file.size)}). Maks. tillatte filstørrelse er ${getFileSize(MAX_FILE_SIZE)}.`
         });

         return;
      }

      if (!await isValidFileType(file)) {
         openModal('INVALID_FILE', { 
            message: `Filen '${file.name}' er ikke en gyldig GML-fil.`
         });

         return;
      }

      const formData = new FormData();
      formData.append('gmlFile', file);
      event.target.value = '';

      const response = await sendAsync(API_URL, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

      if (response) {
         if (!response.validationResult.xsdValidated) {
            openModal('XSD_VALIDATION', { fileName: response.fileName, messages: response.validationResult.xsdValidationMessages });
         } else if (!response.validationResult.epsgValidated) {
            openModal('EPSG_VALIDATION', { fileName: response.fileName, messages: response.validationResult.epsgValidationMessages });
         } else {
            onResponse(response);
         }
      }
   }

   return (
      <label className="upload" htmlFor="upload">
         <input id="upload" type="file" accept=".gml" onChange={handleFileChange} />
         <span>Åpne fil...</span>
      </label>
   );
}

export default Upload;