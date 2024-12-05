import { db } from "@/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";
import { useState } from "react";

// Define the expected structure of user data
export type UserData = {
  uid: string;
  username: string;
}


// Custom hook to get all users' data
export const getUsersList = async () => {
    try {
      const [usersData, setUsersData] = useState<UserData[]>([]); 
      const usersQuery = query(collection(db, "users"));
      const querySnapshot = await getDocs(usersQuery); 
      const usersList: UserData[] = [];

      querySnapshot.forEach((doc) => {
        usersList.push(doc.data() as UserData); // Cast to UserData type
      });

      setUsersData(usersList); // Set the data of all users

      return {success: true, data: usersData} 
    } catch (e) {
      return {success: true, msg: e} 
    }
}
