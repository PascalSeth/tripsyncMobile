import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import tw from 'twrnc';

interface Destination {
  id: number;
  name: string;
  image: string;
  isOngoing: boolean;
  activities: number;
  participants: number;
  categoryId: number;
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <View style={tw`relative mx-4 rounded-xl overflow-hidden mb-4`}>
      <ImageBackground 
        source={{ uri: destination.image }}
        style={tw`h-64 relative rounded-xl`}
      >
        <View style={tw`absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-between`}>
          <View>
            <Text style={tw`text-white text-2xl font-bold`}>Let&apos;s Prepare your Trip</Text>
          </View>
          
          <View>
            <View style={tw`flex flex-row items-center gap-1 mb-2`}>
              {destination.isOngoing && (
                <View style={tw`flex flex-row h-6 items-center px-2 rounded-full bg-white bg-opacity-80`}>
                  <View style={tw`w-2 h-2 bg-green-400 rounded-full mr-1`}></View>
                  <Text style={tw`text-black text-xs`}>On Going</Text>
                </View>
              )}
              <View style={tw`ml-2`}>
                <Text style={tw`text-green-400 text-xl`}>+</Text>
              </View>
            </View>
            
            <View style={tw`flex flex-row items-center`}>
              <Text style={tw`text-white text-lg font-medium`}>{destination.name}</Text>
              <View style={tw`ml-auto flex flex-row items-center gap-2`}>
                <View style={tw`flex flex-row -`}>
                  {[...Array(3)].map((_, i) => (
                    <View key={i} style={tw`w-6 h-6 rounded-full border border-gray-300 bg-gray-200`}></View>
                  ))}
                  <View style={tw`w-6 h-6 rounded-full border border-gray-300 bg-gray-200 flex items-center justify-center`}>
                    <Text style={tw`text-xs text-gray-700`}>+{destination.participants}</Text>
                  </View>
                </View>
                <Text style={tw`text-white text-sm`}>{destination.activities} Activity</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DestinationCard;