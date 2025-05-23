import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const Header: React.FC = () => {
  return (
    <View style={tw`flex flex-row justify-between items-center p-4`}>
      <View style={tw`flex flex-row items-center gap-2`}>
        <View style={tw`w-8 h-8 bg-gray-200 rounded-full`}></View>
        <Text style={tw`text-black text-lg font-medium`}>Hi, Asaas</Text>
      </View>
      <View style={tw`flex flex-row gap-4`}>
        <TouchableOpacity>
          <Text style={tw`text-black text-xl`}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={tw`text-black text-xl`}>⋮</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;