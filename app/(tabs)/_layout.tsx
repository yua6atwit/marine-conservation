import { colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Tabs } from 'expo-router';
import { getAuth } from 'firebase/auth';
import React from 'react';


export default function AppLayout() {

  getAuth().onAuthStateChanged((user) => {
    if (!user) router.replace("/login");
  });

  return (
    <TabNav/>
  );
}

function TabNav () {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: colors().tint,
      tabBarLabelStyle: {fontFamily: 'RedHatDisplay', fontSize: 16},
      tabBarStyle: {position: 'relative', height: 60},
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({focused, color }) => <Ionicons 
            name={focused? "home" : "home-outline"} 
            size = {25} 
            color={color}/>,
        }}
      />
      <Tabs.Screen
        name="addScreen"
        options={{
          title: 'Create',
          tabBarIcon: ({focused, color }) => <Ionicons 
            name={focused? "add-circle" : "add-circle-outline"} 
            size={30} 
            color={color} 
            />
            
        }}
      />
      <Tabs.Screen
        name="profileScreen"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color }) => <Ionicons 
            name= {focused? "person" : "person-outline"} 
            size = {25} 
            color={color} />,
        }}
      />
    </Tabs>
  )
}