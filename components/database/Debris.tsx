import { db } from "@/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// Define the expected structure of debris item data
export type DebrisItem = {
  id: string,
  category: string,
  description: string,
  collected: number,
}


export const createDebrisData = async (data : DebrisItem) => {
  try{
    //create debris data with custom document id
    const docRef = await setDoc(doc(db, "debris", data.id), {
      id: data.id,
      category: data.category,
      description: data.description,
      collected: data.collected,
    }); 

  
    return {success: true}
  }catch(e){
    console.log('createDebris error', e)
    return {success: false, msg: 'Could not create your debris item'}
  }
}

export const updateDebrisData = async ( data : DebrisItem) => {
  // Get a reference to the document you want to update
  const docRef = doc(db, 'debris', data.id)
  const docSnap = await getDoc(docRef);
  const current = docSnap.data();

  if (docSnap.exists()) {
    // Update the document with the new data
    await updateDoc(docRef, {
      id: data.id,
      catagory: data.category,
      description: data.description,
      collected: data.collected
    });     
  }
}

//TODO: implement get data from 'debris' database/collection
export const getDebrisData = async (data : DebrisItem) => {
  const docRef = doc(db, 'debris', data.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  console.log("Document ID:", docSnap.id); 
  } else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
  }
}
