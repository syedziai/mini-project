import React, { useState, useEffect } from "react";
import axios from "axios";

function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log("Error fetching events:", error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-4">Events List</h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Event Name</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {events && events.length > 0 ? (
              events.map((event) => (
                <tr key={event._id} className="border-b border-gray-300">
                  <td className="px-4 py-2">{event.eventName}</td>
                  <td className="px-4 py-2">{event.eventDate.substring(0, 10)}</td>
                  <td className="px-4 py-2">{event.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-2 text-center">No events found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventsList;
