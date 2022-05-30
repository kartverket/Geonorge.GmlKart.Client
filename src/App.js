import axios from 'axios';
import { Spinner } from 'components/custom-elements';
import { MapView, SplashScreen, TopBar } from 'components/partials';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';

function App() {
   const [mapDocument, setMapDocument] = useState(null);
   const apiLoading = useSelector(state => state.api.loading);

   useEffect(
      () => {
         axios.get('/data.json')
            .then(response => {
               setMapDocument(response.data);
            });
      },
      []
   );

   return (
      <div className={`app ${apiLoading ? 'api-loading' : ''}`}>
         <TopBar onUploadResponse={setMapDocument} />
         <MapView mapDocument={mapDocument} />
         <SplashScreen mapDocument={mapDocument} />
         {
            apiLoading ?
               <Spinner /> :
               null
         }
      </div>
   );
}

export default App;

