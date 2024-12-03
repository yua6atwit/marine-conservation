import { useTheme } from "@/constants/theme";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * Custom view
 */
export const ScreenWrapper= ({children}:any) => {

    const {top, bottom} = useSafeAreaInsets();
    //check top padding
    const paddingTop = top>0 ? top+5 : 10;
  
    // Accessing colors from the current theme
    const colors = useTheme().colors;
    return(
      //Applying container style
      <View style={[
        {backgroundColor: colors.background,
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