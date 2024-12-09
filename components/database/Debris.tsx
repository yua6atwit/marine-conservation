import { db } from "@/firebaseConfig"
import { addDoc, collection } from "firebase/firestore"


export type DebrisItem = {
  id: number,
  description: string,
  collected: number,
}

export type Debris = {
    type: Plastic
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


plastic

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