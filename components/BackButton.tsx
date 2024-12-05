import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';


/**
 * Custom back button
 */
export const BackButton = ({onPress}: any) => {
    const router = useRouter();
    return (
        //apply style
        <TouchableOpacity onPress={onPress? onPress : ()=> router.back() } style = {styles.button}>
            <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      alignSelf: 'flex-start',
      padding: 5,
    },

});
  
  