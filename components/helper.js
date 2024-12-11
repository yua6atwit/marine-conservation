import { Dimensions } from "react-native";

//Get device dimensions
const {width: devideWidth, height: deviceHeight} = Dimensions.get('window');

/**
 * 
 * @param percentage number
 * @returns height percentage of the device screen
 */
export const hp = (percentage) =>{
    return (percentage*deviceHeight) /100;
}

/**
 * 
 * @param percentage number
 * @returns width percentage of the device screen
 */
export const wp = (percentage) =>{
    return (percentage*devideWidth) /100;
}
