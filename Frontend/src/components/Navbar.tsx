import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/auth";
import { Menu, User, ChevronDown, LogOut, Settings } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo & Links */}
          <div className="flex items-center space-x-6">
            <Link to="/dashboard" className="text-xl font-bold text-blue-600">
              PlanWiSe
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
              <Link to="/todo" className="text-gray-700 hover:text-blue-500">To-Do List</Link>
              <Link to="/journal" className="text-gray-700 hover:text-blue-500">Journal</Link>
            </div>
          </div>

          {/* Right: Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              <User size={20} />
              <ChevronDown size={16} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <Link
                  to="/settings"
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
                >
                  <Settings size={16} /> <span>Settings</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  <LogOut size={16} /> <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 bg-white shadow-lg p-4 rounded-lg">
            <Link to="/dashboard" className="block text-gray-700 hover:text-blue-500">
              Dashboard
            </Link>
            <Link to="/todo" className="block text-gray-700 hover:text-blue-500">
              To-Do List
            </Link>
            <Link to="/journal" className="block text-gray-700 hover:text-blue-500">
              Journal
            </Link>
            <hr />
            <Link to="/settings" className="block text-gray-700 hover:text-blue-500">
              Settings
            </Link>
            <button onClick={handleLogout} className="w-full text-left text-red-600 hover:text-red-800">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
