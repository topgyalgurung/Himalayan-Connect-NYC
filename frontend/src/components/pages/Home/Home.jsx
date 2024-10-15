import { useState, useEffect, useContext } from "react";

//import data from "../../../data/Data.js";
import ServiceList from "./ServiceList.jsx";

import { UserContext } from "../../../context/UserContext";
//map
import CustomMap from "../../Map/CustomMap";
import { APIProvider } from "@vis.gl/react-google-maps";
//login
import { login } from "../../../utils/login";
import Input from "./Input.jsx";
// hooks
import useGetServices from "../../../hooks/useGetServices.jsx";

//api key
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  // custom hooks to get our services
  const { services, loading, error } = useGetServices();
  const [filteredData, setFilteredData] = useState([]);

  // check if the services are not empty, if so then the
  // API call was successful and we can update our
  // filteredData state
  useEffect(() => {
    if (Object.keys(services).length > 0) {
      setFilteredData(services);
    }
  }, [services]);

  const filterItems = (searchTerm) => {
    // const searchTerm = e.target.value;
    // setSearchItem(searchTerm);

    const filteredItems = services.filter((service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredItems);
  };
  return (
    <div>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        {user ? (
          <button
            onClick={() => {
              // call logout
              if (typeof setUser === "function") {
                setUser(null);
              } else {
                console.error("setUser is not a function");
              }
            }}
          >
            logout
          </button>
        ) : (
          <button
            onClick={async () => {
              const loggedInUser = await login();
              if (typeof setUser === "function") {
                setUser(loggedInUser);
              } else {
                console.error("setUser is not a function");
              }
            }}
          >
            login
          </button>
        )}
      </div>
      <h2>Home</h2>
      <Input onChangeCallback={filterItems} />

      {/* if the data is loading, show a proper message */}
      {loading && <p>Loading...</p>}
      {/* if there's an error, show a proper message */}
      {error && <p>There was an error loading the services</p>}
      {/* if it finished loading, render the items */}
      {!loading && !error && <ServiceList items={filteredData} />}

      {/* <h1> Services </h1> */}
      <APIProvider apiKey={apiKey}>
        <CustomMap />
      </APIProvider>

      {/* <Map /> */}
    </div>
  );
};

export default Home;
