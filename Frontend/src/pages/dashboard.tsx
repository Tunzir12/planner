import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { db, auth } from "../config/firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [entries, setEntries] = useState<{ [key: string]: boolean }>({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) return;
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    setLoading(true);
    const q = query(collection(db, "entries"), where("userId", "==", auth.currentUser?.uid));
    const querySnapshot = await getDocs(q);

    const newEntries: { [key: string]: boolean } = {};
    querySnapshot.forEach((doc) => {
      const { date } = doc.data();
      newEntries[date] = true;
    });

    setEntries(newEntries);
    setLoading(false);
  };

  const handleDateClick = async (date: Date) => {
    const dateString = date.toISOString().split("T")[0];
    setSelectedDate(date); // Now actually using it

    if (!entries[dateString]) {
      // Create a new entry if it doesn't exist
      await addDoc(collection(db, "entries"), {
        userId: auth.currentUser?.uid,
        date: dateString,
        todo: [],
        journal: "",
      });

      setEntries((prev) => ({ ...prev, [dateString]: true }));
    }

    navigate(`/entry/${dateString}`);
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const dateString = date.toISOString().split("T")[0];
    return entries[dateString] ? "bg-blue-500 text-white rounded-md" : "";
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-4">Your Monthly Calendar</h2>

      {selectedDate && (
        <p className="mb-4 text-lg font-semibold text-blue-600">
          Selected Date: {selectedDate.toDateString()}
        </p>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Calendar
          onClickDay={handleDateClick}
          className="bg-white p-4 shadow-lg rounded-lg"
          tileClassName={tileClassName}
        />
      )}
    </div>
  );
};

export default Dashboard;
