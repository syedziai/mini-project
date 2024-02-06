import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item/Item";
import LoadingSpinner from "./LoadingSpinner"; // Import your LoadingSpinner component

const Mobiles = () => {
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [mobileResponse, setMobilesResponse] = useState([]);

  const getMobiles = async () => {
    try {
      const response = await axios.get("http://localhost:8080/mobiles", {
        headers: { token: window.localStorage.getItem("loginToken") },
      });

      const { data } = response;
      console.log("mobile_data", data);
      if (Array.isArray(data) && data.length > 0 && data[0].mobiles) {
        setMobilesResponse(data[0].mobiles);
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
    getMobiles();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <LoadingSpinner /> // Render the loading spinner while waiting for the API response
      ) : (
        <div className="flex flex-wrap justify-center">
          {mobileResponse.map((mobile, index) => (
            <Item
              key={index}
              brand={mobile.brand}
              model={mobile.model}
              RAM={mobile.RAM}
              storage={mobile.storage}
              cost={mobile.cost}
              image={mobile.image}
              itemType="mobile"
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Mobiles;
