import React, { useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import "./map.css";

const CustomMap = () => {
  const [markerLocation, setMarkerLocation] = useState({
    lat: 40.746,
    lng: -73.892,
  });
  return (
    <div className="map-container">
      <APIProvider>
        <Map
          style={{ borderRadius: "20px" }}
          defaultZoom={13}
          defaultCenter={markerLocation}
          gestureHandling={"greedy"}
          disableDefaultUI
        >
          <Marker position={markerLocation} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default CustomMap;
