import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

// Register User
export const registerUser = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Login User
export const loginUser = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// Logout User
export const logoutUser = async () => {
  return await signOut(auth);
};
