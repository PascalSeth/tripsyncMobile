import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function Header() {
  return (
    <View style={tw`mb-4`}>
      <Text style={tw`text-black dark:text-white text-3xl font-bold`}>TripSync</Text>
    </View>
  );
}