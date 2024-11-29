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
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: colors().tint,
      tabBarLabelStyle: {fontFamily: 'RedHatDisplay', fontSize: 16},
      tabBarStyle: {position: 'absolute', height: 60},
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name='home-outline' color={color}/>,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Post',
          tabBarIcon: ({ color }) => <Ionicons name='home-outline'  color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Upload',
          tabBarIcon: ({ color }) => <Ionicons name='home-outline' color={color} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name='home-outline'  color={color} />,
        }}
      />
    </Tabs>
  );
}
