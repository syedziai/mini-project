import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventsList from "./components/EventsList";
import CreateEvent from "./components/CreateEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreateEvent></CreateEvent>} />
        <Route path="/eventList" element={<EventsList></EventsList>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
