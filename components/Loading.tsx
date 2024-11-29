import { colors } from "@/constants/theme";
import { ActivityIndicator, View } from "react-native";

/**
 * Loading icon view
 */
export const Loading = () => {
    return (
        <View style = {{justifyContent: 'center', alignItems:'center'}}>
            <ActivityIndicator size = {'large'} color={colors().link} />
        </View>
    );
}

