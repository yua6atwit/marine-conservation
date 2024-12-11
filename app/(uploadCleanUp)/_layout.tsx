import { Text } from '@/components/Text';
import { hp, wp } from '@/constants/helper';
import { colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import React from 'react';
import { StyleSheet, View } from 'react-native';


export default function uploadLayout() {

  return (
    <TabNav/>
  );
}

function TabNav () {
  return (
    <Tabs>
    <TabSlot />
    {/* A custom tab bar */}
    <View style = {[styles.tabBar, {backgroundColor: colors().background}]}>

        <TabTrigger style = {[styles.topTabBar]} name="Exit" onPress={() => router.replace('/(tabs)/addScreen')}>
            <Ionicons name="close-sharp" size={25} color="black"/>
            <Text>Exit</Text>
        </TabTrigger>

        <View style = {[styles.bottomTabBar]}>
        <TabTrigger name="uploadScreen">
            <Ionicons name="chevron-back" size={25} color="black"/>
            <Text>Monitoring Form</Text>
        </TabTrigger>

        <TabTrigger name="catagories">
            <Text>Collected Trash</Text>
            <Ionicons name="chevron-forward" size={25} color="black"/>
        </TabTrigger>
        </View>
    </View>
    <TabList style={{ display: 'none' }}>
        <TabTrigger name="uploadScreen" href="/(uploadCleanUp)/uploadScreen"/>
        <TabTrigger name="catagories" href="/(uploadCleanUp)/catagories"/>
    </TabList>
    </Tabs>
  )
}



const styles = StyleSheet.create({
    tabBar: {
      alignContent: 'center',
      position: 'absolute',
      width: '100%',
      gap: 10,
      paddingVertical: hp(1),
      paddingHorizontal: wp(3),
      borderBottomWidth: 0.2,
    },
    topTabBar: {
        flexDirection: 'row',
        gap: 5,
    },
    bottomTabBar: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    }
});
  
