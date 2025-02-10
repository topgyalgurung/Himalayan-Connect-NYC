import React, { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import "./map.css";

const CustomMap = () => {
  const mapId = "91b57a02049bdddd";
  const [markerLocation, setMarkerLocation] = useState({
    lat: 40.746,
    lng: -73.892,
  });
  // store clicked location
  const [selectedLocation, setSelectedLocation] = useState({});
  // store show dialog state to add location
  const [showDialog, setShowDialog] = useState(false);
  // store dialog location
  const [dialogLocation, setDialogLocation] = useState("");
  // store list of all locations selected
  const [listOfLocations, setListOfLocations] = useState([]);

  // add location to show in a list
  const onAddLocation = () => {
    // Create a Google Maps Geocoder instance
    const geocoder = new window.google.maps.Geocoder();

    // Reverse geocode the coordinates to get the place name
    geocoder.geocode({ location: selectedLocation }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          setListOfLocations([
            ...listOfLocations,
            { name: results[0].formatted_address, location: selectedLocation },
          ]);
          setShowDialog(false);
        }
      } else {
        console.error("Geocoder failed due to: " + status);
      }
    });
  };

  const handleMapClick = (mapProps) => {
    // checks if location clicked is valid
    if (mapProps.detail.placeId) {
      const lat = mapProps.detail.latLng.lat;
      const lng = mapProps.detail.latLng.lng;
      setShowDialog(true);
      setDialogLocation({ lat, lng });
      setSelectedLocation({ lat, lng });
    } else {
      // show alert message
      alert("Please select the specific location");
    }
  };
  return (
    <div className="map-container">
      <div className="map-container">
        <Map
          style={{ borderRadius: "20px" }}
          defaultZoom={13}
          defaultCenter={markerLocation}
          gestureHandling={"greedy"}
          disableDefaultUI
          mapId={mapId}
          onClick={(mapProps) => handleMapClick(mapProps)}
        >
          {showDialog && (
            // displays a dialog to add clicked location
            <InfoWindow position={dialogLocation}>
              <button className="app-button" onClick={onAddLocation}>
                Add this location
              </button>
            </InfoWindow>
          )}
          {/* Maker is deprecated */}
          <AdvancedMarker position={markerLocation} mapId={mapId} />
        </Map>
      </div>
    </div>
  );
};

export default CustomMap;
