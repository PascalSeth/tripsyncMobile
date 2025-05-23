// app/components/homescreen/ServiceOption.tsx
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';


interface ServiceOptionProps {
  name: string;
  icon: string;
  href: string; // Use the union type for href
}

export default function ServiceOption({ name, icon, href }: ServiceOptionProps) {
  return (
    <TouchableOpacity
      style={tw`items-center`}
      onPress={() => {
        router.push(href as any); // Now TypeScript knows href is a valid route
      }}
    >
      <View style={tw`bg-gray-100 dark:bg-gray-800 w-16 h-16 rounded-full items-center justify-center mb-2`}>
        <Text style={tw`text-2xl`}>{icon}</Text>
      </View>
      <Text style={tw`text-xs text-center text-black dark:text-white`}>{name}</Text>
    </TouchableOpacity>
  );
}