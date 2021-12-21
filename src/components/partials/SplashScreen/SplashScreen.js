import { useSelector } from 'react-redux';
import { Spinner } from "components/custom-elements";
import Logo from 'assets/gfx/logo-geonorge.svg';
import './SplashScreen.scss';

function SplashScreen({ mapDocument, loading }) {
   const apiLoading = useSelector(state => state.api.loading);

   if (mapDocument || apiLoading) {
      return null;
   }

   return (
      <div className="splash-screen">
         <div>
            <img src={Logo} alt="Geonorge" />
            <span className="app-name">GML-kart</span>
            {
               loading ?
                  <Spinner /> :
                  null
            }
         </div>

      </div>
   );
}

export default SplashScreen;