import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

interface SearchProps {
  location: string;
  onSearch?: () => void;
}

const Search: React.FC<SearchProps> = ({ location, onSearch }) => {
  return (
    <View style={tw`mx-4 flex flex-row items-center gap-2 mb-4`}>
      <View style={tw`flex-1 flex flex-row items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg`}>
        <View style={tw`flex flex-row items-center gap-1`}>
          <View style={tw`w-6 h-6 rounded-full bg-green-500 flex items-center justify-center`}>
            <Text style={tw`text-white text-xs`}>📍</Text>
          </View>
          <Text style={tw`text-black`}>{location}</Text>
        </View>
        <Text style={tw`text-gray-500 text-sm ml-auto`}>Search nearby</Text>
      </View>
      <TouchableOpacity 
        style={tw`w-10 h-10 bg-green-500 rounded-full flex items-center justify-center`}
        onPress={onSearch}
      >
        <Text style={tw`text-white text-lg`}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;