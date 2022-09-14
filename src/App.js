import React from "react";
import "./App.scss";
import { AppProvider } from "./context/AppContext";

// Comps
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home";

function App() {
  return (
    <AppProvider>
      <div className="app container">
        <Navbar />
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
