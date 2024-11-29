import { Text } from '@/components/Text';
import { StyleSheet, View } from 'react-native';


export default function TabTwo() {

  return (
    <View style={styles.container}>
      <Text>Create Post</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  textbox: {
    height: 300,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    backgroundColor: 'gray'
  },
});