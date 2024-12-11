import { db } from "@/firebaseConfig";
import { User } from "firebase/auth";
import { addDoc, collection, getDocs, limit, orderBy, query, updateDoc } from "firebase/firestore";

// Define the expected structure of post data
export type PostData = {
  dateUploaded?: Date
  id?: number
  user: User
  text: string
  image?: string
  likes?: number
  comments?: Comments
}

export type Comments = {

}

/**
 * Creates a post in Firebase Firestore
 * @param post PostData
 * @returns success status
 */
export const createPost = async (post : PostData) => {
  try{
    //TODO: upload image
    if(post.image && typeof post.image == 'object'){
    
    }

    //Create post item
    const docRef = await addDoc(collection(db, "posts"), {
      dateUploaded: new Date(),
      user: post.user,
      text: post.text,
      image: post.image
    }); 

    await updateDoc(docRef, {
      id: docRef.id
    });
  
    return {success: true}
  }catch(e){
    console.log('createPost error', e)
    return {success: false, msg: 'Could not create your post'}
  }
}

/**
 * Fetch posts from Firestore
 * @returns success status and list of posts if true
 */
export const getPosts = async() => {
  try{
      const posts: PostData[] = []; // Initialize an empty array to store posts
      const postsRef = collection(db, "posts");

      //limit posts fetched and order by latest posts
      const q = query(postsRef, orderBy('dateUploaded', 'desc'), limit(10));
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        // Push each post's data into the array
        posts.push(doc.data() as PostData);
      });
  

    return {success: true, data: posts}
  } catch (e) {
    console.log('getPost error', e)
    return {success: false, msg: 'Could not get post'}
  }
}
