import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? true : false);
    });
    return () => unsubscribe();
  }, []);

  if (user === null) {
    return <p>Loading...</p>;
  }

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
