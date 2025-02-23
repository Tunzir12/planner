import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Todo from "./pages/Todo";
import Journal from "./pages/Journal";
import ProfileSettings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Navbar />
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/todo"
          element={
            <PrivateRoute>
              <Navbar />
              <Todo />
            </PrivateRoute>
          }
        />
        <Route
          path="/journal"
          element={
            <PrivateRoute>
              <Navbar />
              <Journal />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Navbar />
              <ProfileSettings />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
