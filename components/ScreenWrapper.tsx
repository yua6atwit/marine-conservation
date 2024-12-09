import { colors } from "@/constants/theme";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * Custom view
 */
export const ScreenWrapper= ({children}:any) => {

    const {top, bottom} = useSafeAreaInsets();
    //check top padding
    const paddingTop = top>0 ? top+5 : 0;
  
    return(
      //Applying container style
      <View style={[
        {backgroundColor: colors().background,
          flex: 1,
          paddingTop,
        },
      ]}>
        {
          children
        }
      </View>
    )
}