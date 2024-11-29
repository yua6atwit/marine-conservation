import { StyleSheet, Text, View } from 'react-native';


export default function TabThree() {
  return (
    <View style={styles.container}>
      <Text>two</Text>
      <View style={styles.separator}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});