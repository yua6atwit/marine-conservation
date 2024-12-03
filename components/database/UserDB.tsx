import { auth, db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

// Define the expected structure of user data
export type UserData = {
  uid: string;
  email: string;
  username: string;
}

export function getUserData() {
  const [userData, setUserData] = useState<UserData | null>(null); // Initial state is null

  const fetchUserData = async () => {
    if (!auth.currentUser) {
      console.log("No user is currently signed in.");
      return;
    }

    const userQuery = query(
      collection(db, "users"),
      where("uid", "==", auth.currentUser.uid)
    );

    try {
      const querySnapshot = await getDocs(userQuery); // Fetch fresh data from the server
      querySnapshot.forEach((doc) => {
        setUserData(doc.data() as UserData); // Cast to UserData type
        console.log(doc.id, " => ", doc.data());
      });
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };
  // Fetch the current user's data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return userData; // Return the user data
}

// Custom hook to get all users' data
export const getUsersList = () => {
  const [usersData, setUsersData] = useState<UserData[]>([]); // Initial state is an empty array

  const fetchUsersData = async () => {
    const usersQuery = query(collection(db, "users"));

    try {
      const querySnapshot = await getDocs(usersQuery); // Fetch fresh data from the server
      const usersList: UserData[] = [];

      querySnapshot.forEach((doc) => {
        usersList.push(doc.data() as UserData); // Cast to UserData type
      });

      setUsersData(usersList); // Set the data of all users
    } catch (err) {
      console.error("Error fetching users data:", err);
    }
  };

  // Fetch all users' data when the component mounts
  useEffect(() => {
    fetchUsersData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return usersData ; // Return the list of all users' data
}
