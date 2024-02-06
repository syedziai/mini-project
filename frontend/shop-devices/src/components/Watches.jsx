import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item/Item";
import LoadingSpinner from "./LoadingSpinner"; // Import your LoadingSpinner component

const Watches = () => {
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [watchesResponse, setWatchesResponse] = useState([]);

  const getWatches = async () => {
    try {
      const response = await axios.get("http://localhost:8080/watches", {
        headers: { token: window.localStorage.getItem("loginToken") },
      });

      const { data } = response;
      console.log("watches_data", data);
      if (Array.isArray(data) && data.length > 0 && data[0].watches) {
        setWatchesResponse(data[0].watches);
      } else {
        console.error("Invalid response structure:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  };

  useEffect(() => {
    getWatches();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <LoadingSpinner /> // Render the loading spinner while waiting for the API response
      ) : (
        <div className="flex flex-wrap justify-center">
          {watchesResponse.map((watch, index) => (
            <Item
              key={index}
              brand={watch.brand}
              model={watch.model}
              caseMaterial={watch.caseMaterial}
              waterResistance={watch.waterResistance}
              cost={watch.cost}
              image={watch.image}
              itemType="watch"
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Watches;
