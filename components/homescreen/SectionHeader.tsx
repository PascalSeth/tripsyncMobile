import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

interface SectionHeaderProps {
  title: string;
  actionText: string;
  onPress: any,
}

export default function SectionHeader({ title, actionText,onPress }: SectionHeaderProps) {
  return (
    <View style={tw`flex-row justify-between items-center mt-6 mb-1`}>
      <Text style={tw`text-lg font-bold text-black dark:text-white`}>{title}</Text>
      {actionText ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={tw`text-gray-500 dark:text-gray-400`}>{actionText}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}