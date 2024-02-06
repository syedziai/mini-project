import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router

function CreateEvent() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(
    new Date().toISOString().split("T")[0]
  ); // Format date to yyyy-mm-dd
  const [description, setDescription] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const onSubmit = async (e) => {
    e.preventDefault();

    const event = {
      eventName: eventName,
      eventDate: eventDate,
      description: description,
    };

    try {
      const res = await axios.post("http://localhost:5000/create", event);
      console.log(res.data);
      // Navigate to the EventsList page after successful event creation
      navigate("/eventList");
    } catch (error) {
      console.error("Error creating event:", error);
    }

    // Reset form fields
    setEventName("");
    setEventDate(new Date().toISOString().split("T")[0]); // Reset date to current date
    setDescription("");
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-4">Create New Event</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            htmlFor="eventName"
            className="block text-sm font-medium text-gray-700"
          >
            Event Name:
          </label>
          <input
            id="eventName"
            type="text"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventDate"
            className="block text-sm font-medium text-gray-700"
          >
            Date:
          </label>
          <input
            id="eventDate"
            type="date"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
          <input
            id="description"
            type="text"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;
