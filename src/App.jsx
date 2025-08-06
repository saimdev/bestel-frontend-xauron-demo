import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";

function App() {
  const [currentRoute, setCurrentRoute] = useState("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentRoute("dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentRoute("login");
  };

  const navigate = (route) => {
    if (isAuthenticated || route === "login") {
      setCurrentRoute(route);
    }
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case "login":
        return <Login onLogin={handleLogin} />;
      case "dashboard":
        return <Dashboard onLogout={handleLogout} navigate={navigate} />;
      case "analytics":
        return <Analytics onLogout={handleLogout} navigate={navigate} />;
      default:
        return <Login onLogin={handleLogin} />;
    }
  };

  return <div className="App">{renderCurrentPage()}</div>;
}

export default App;
