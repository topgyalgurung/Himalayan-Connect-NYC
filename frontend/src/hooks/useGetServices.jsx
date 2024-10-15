import { useState, useEffect } from "react";

// refactor our api call into custom hooks
const useGetServices = () => {
  // initialize the loading state as true
  const [loading, setLoading] = useState(true);
  // to change list item on user input
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/c/dee2-862d-40ff-a98e")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { services, loading, error };
};

export default useGetServices;
