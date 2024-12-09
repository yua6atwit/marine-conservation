import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { InputUnderline } from '@/components/Input';
import { KeyboardView } from '@/components/KeyboardView';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { hp, wp } from '@/constants/helper';
import { colors } from '@/constants/theme';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';


export default function UploadScreen() {
  const [formData, setFormData] = useState(new Array(10).fill(0))

  // Handle the change for a specific index
  const handleOnChangeText = (text: string, index: number) => {
      // Copy the array to avoid direct mutation
      const updatedInputs = [...formData];

      // Update the specific index with the new text
      updatedInputs[index] = text

      // Update state with the modified array 
      return updatedInputs
  }


  const onSubmit = () => {
    router.push('/screens/catagories')
  }

  return (
    <ScreenWrapper>
      <Header title = 'Upload Clean Up' onPress ={() => router.replace('/(tabs)/addScreen')}/>
      <KeyboardView>
        <View style = {[styles.container]}>

          {/*Form */}
          <View style ={[styles.form, {backgroundColor: colors().secondaryBackground}]}> 
            <InputUnderline 
              label = 'Full name of observer:' 
              onChangeText = {value => setFormData(handleOnChangeText(value, 0))}
            />
            <InputUnderline 
              label = 'Email address of the observer:' 
              onChangeText = {value => setFormData(handleOnChangeText(value, 1))}
            />
            <InputUnderline 
              label = 'Date of cleaning action:' 
              onChangeText = {value => setFormData(handleOnChangeText(value, 2))}
            />
            <InputUnderline 
              label = 'Organizer of the cleaning action:' 
              onChangeText = {value => setFormData(handleOnChangeText(value, 3))}
            />
            <InputUnderline 
              label = 'Cleaning action area (City, County):' 
              onChangeText = {value => setFormData(handleOnChangeText(value, 4))}
            />
            <InputUnderline 
              label = 'Name of the beach:' 
              onChangeText = {value => setFormData(handleOnChangeText(value, 5))}
            />
            <InputUnderline 
              label = 'Type of beach:' 
              onChangeText = {value => setFormData(handleOnChangeText(value, 6))}
            />
            <InputUnderline 
              label = 'Area of the beach area to be cleaned (m2):' 
              onChangeText = {value => setFormData(handleOnChangeText(value, 7))}
            />
            <InputUnderline 
              label = 'Proximity to facilities (Cafe Bar, Restaurant, etc):' 
              onChangeText = {value => setFormData(handleOnChangeText(value, 8))}
            />
            <InputUnderline 
              label = 'Access to the Beach (Car, Boat, or Walking):' 
              onChangeText = {value => setFormData(handleOnChangeText(value, 9))}
            />
          </View>
          {/* Next button */}
          <View style = {styles.bottomButton}>
            <Button type = 'light' label='Next' onPress={onSubmit}/>
          </View>

        </View>
        
      </KeyboardView>
    </ScreenWrapper>
  );
}


const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  form: {
    gap: 30,
    paddingHorizontal: wp(5),
    paddingVertical: hp(3),
  },
  bottomButton: {
    paddingHorizontal: wp(5),
    paddingTop: hp(4),
    paddingBottom: hp(2)
  }
});
