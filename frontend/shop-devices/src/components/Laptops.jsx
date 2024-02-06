import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item/Item";
import LoadingSpinner from "./LoadingSpinner"; // Import your LoadingSpinner component

const Laptops = () => {
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [laptopResponse, setLaptopsResponse] = useState([]);

  const get_laptops = async () => {
    try {
      const response = await axios.get("http://localhost:8080/laptops", {
        headers: { token: window.localStorage.getItem("loginToken") },
      });

      const { data } = response;
      console.log("laptop_data",data)
      if (Array.isArray(data) && data.length > 0 && data[0].laptops) {
        setLaptopsResponse(data[0].laptops);
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
    get_laptops();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <LoadingSpinner /> // Render the loading spinner while waiting for the API response
      ) : (
        <div className="flex flex-wrap justify-center">
          {laptopResponse.map((laptop, index) => (
            <Item
              key={index}
              brand={laptop.brand}
              model={laptop.model}
              processor={laptop.processor}
              RAM={laptop.RAM}
              storage={laptop.storage}
              cost={laptop.cost}
              image={laptop.image}
              itemType="laptop"
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Laptops;
