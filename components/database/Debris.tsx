import { db } from "@/firebaseConfig";
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";



export type DebrisItem = {
  id: string,
  category: string,
  description: string,
  collected: number,
}


export const createDebrisData = async (data : DebrisItem) => {
  try{

    const docRef = await setDoc(doc(db, "debris", data.id), {
      id: data.id,
      category: data.category,
      description: data.description,
      collected: data.collected,
    }); 

  
    return {success: true}
  }catch(e){
    console.log('createPost error', e)
    return {success: false, msg: 'Could not create your post'}
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

type Plastic = {
    Bags?: number
    Drinkbottles?: number 
    BottlePlugs?: number 
    PlasticRingOfPlugs?: number
    FoodContainersLid?: number
    DetergentBottles?: number
    CosmeticProducts?: number
    MotorOilPackaging?: number
    Cutlery?: number
    LollipopSticks?: number
    CigaretteButts?: number
    LightersAndCigaretteBoxes?: number
    FootwearAndClothingParts?: number
    DisposableGloves?: number
    FishingTool?: number
    Pergolas?: number
    FLoats?: number
    Ropes?: number 
    StyrofoamBoxesPieces?: number
    EarSticks?: number
    ConstructionMaterial?: number
    InsulationMaterial?: number
    DiapersAndSanitaryPads?: number
    DisposableMedicalMasks?: number
    Other?: number
}

const plastic = () => {

    const data: Plastic = {
        Cutlery: 0,
        LollipopSticks: 0,
        CigaretteButts: 0,
        LightersAndCigaretteBoxes: 0,
        FootwearAndClothingParts: 0,
        DisposableGloves: 0,
        FishingTool: 0,
        Pergolas: 0,
        FLoats: 0,
        Ropes: 0, 
        StyrofoamBoxesPieces: 0,
        EarSticks: 0,
        ConstructionMaterial: 0,
        InsulationMaterial: 0,
        DiapersAndSanitaryPads: 0,
        DisposableMedicalMasks: 0,
        Other: 0
    }

    return data
}

export const createPost = async (debris : Plastic) => {
    try{
  
      const docRef = await addDoc(collection(db, "Debris"), {
        debris: debris
      }); 
    
      return {success: true}
    }catch(e){
      console.log('createPost error', e)
      return {success: false, msg: 'Could not create your post'}
    }
  }