import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

export default function SearchBars() {
  return (
    <View style={tw`flex-row items-center justify-between mb-6`}>
      <TouchableOpacity 
        style={tw`flex-1 flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-full py-3 px-4 mr-3`}
      >
        <Text style={tw`mr-2`}>🔍</Text>
        <Text style={tw`text-gray-500 dark:text-gray-400`}>Where to?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={tw`bg-gray-100 dark:bg-gray-800 rounded-full py-3 px-4`}
      >
        <Text style={tw`text-black dark:text-white font-medium`}>Later</Text>
      </TouchableOpacity>
    </View>
  );
}