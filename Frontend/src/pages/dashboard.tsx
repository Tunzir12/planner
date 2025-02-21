import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/auth";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-6">Welcome to Your Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
