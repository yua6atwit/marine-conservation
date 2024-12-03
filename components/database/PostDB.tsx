import { db } from "@/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";

// Define the expected structure of post data
export type PostData = {
  uid: string;
  username: string;
  text: string;
  image: string;
}

// Custom hook to fetch posts from Firestore
export function getPostList() {
  const [posts, setPosts] = useState<PostData[] | null>(null); // State for posts

  const getData = async () => {
    const arr: PostData[] = []; // Initialize an empty array to store posts
    const q = query(collection(db, "posts"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // Push each post's data into the array
      arr.push(doc.data() as PostData);
    });

    // Set the posts state once all data is fetched
    setPosts(arr);
    console.log("Data is in array:");
  };

  useEffect(() => {
    getData(); // Fetch data when the component mounts
  }, []); // Empty dependency array ensures this effect runs once on mount

  return posts; // Return the posts data to be used by the component
}
