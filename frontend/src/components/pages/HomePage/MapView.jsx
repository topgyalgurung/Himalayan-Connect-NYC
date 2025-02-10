
//map
import CustomMap from "../../MapView/CustomMap.jsx";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

//api key
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const MapView = () => {
  return (
    <div> 
         {/* set the context for Google Maps API key to provide access to our <CustomMap /> component. */}
        <APIProvider
        apiKey={apiKey}
        onLoad={() => console.log("Maps API has loaded.")}
        >
    <CustomMap />
  </APIProvider>
  </div>
  )
}

export default MapView