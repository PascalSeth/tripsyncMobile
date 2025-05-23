import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
// Import MaterialIcons from react-native-vector-icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      <ScrollView contentContainerStyle={tw`pb-20`}>
        {/* Profile Header */}
        <View style={tw`flex-row justify-between items-center p-4`}>
          <View>
            <Text style={tw`text-3xl font-bold mb-1`}>User Name</Text>
            <View style={tw`flex-row items-center`}>
              <FontAwesome name="star" size={16} color="black" style={tw`mr-1`} />
              <Text style={tw`font-bold`}>5.00</Text>
            </View>
          </View>
          <View style={tw`bg-gray-200 rounded-full w-16 h-16 items-center justify-center`}>
            <FontAwesome name="user" size={32} color="#9CA3AF" />
          </View>
        </View>

        {/* Quick Actions */}
        <View style={tw`flex-row justify-between px-4 mb-4`}>
          <TouchableOpacity style={tw`bg-gray-100 rounded-lg p-4 w-24 items-center`}>
            <View style={tw`bg-white rounded-full p-2 mb-2`}>
              <MaterialIcons name="help" size={20} color="black" />
            </View>
            <Text style={tw`text-sm font-medium`}>Help</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={tw`bg-gray-100 rounded-lg p-4 w-24 items-center`}>
            <View style={tw`bg-white rounded-full p-2 mb-2`}>
              <MaterialIcons name="credit-card" size={20} color="black" />
            </View>
            <Text style={tw`text-sm font-medium`}>Wallet</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={tw`bg-gray-100 rounded-lg p-4 w-24 items-center`}>
            <View style={tw`bg-white rounded-full p-2 mb-2`}>
              <Ionicons name="stats-chart" size={20} color="black" />
            </View>
            <Text style={tw`text-sm font-medium`}>Activity</Text>
          </TouchableOpacity>
        </View>

        {/* Safety Checkup */}
        <TouchableOpacity style={tw`mx-4 bg-gray-100 rounded-lg p-4 mb-4 flex-row justify-between items-center`}>
          <View>
            <Text style={tw`font-bold text-lg`}>Safety checkup</Text>
            <Text style={tw`text-gray-600`}>Learn ways to make rides safer</Text>
          </View>
          <View style={tw`bg-white rounded-full p-2 items-center justify-center h-14 w-14`}>
            <Text style={tw`text-blue-500 font-medium text-sm`}>1/7</Text>
          </View>
        </TouchableOpacity>

        {/* Privacy Checkup */}
        <TouchableOpacity style={tw`mx-4 bg-gray-100 rounded-lg p-4 mb-4 flex-row justify-between items-center`}>
          <View>
            <Text style={tw`font-bold text-lg`}>Privacy checkup</Text>
            <Text style={tw`text-gray-600`}>Take an interactive tour of your privacy settings</Text>
          </View>
          <View style={tw`h-14 w-14 items-center justify-center`}>
            <MaterialIcons name="content-paste" size={28} color="#3B82F6" />
          </View>
        </TouchableOpacity>

        {/* CO2 Saved */}
        <View style={tw`mx-4 bg-gray-100 rounded-lg p-4 mb-4 flex-row justify-between items-center`}>
          <View>
            <Text style={tw`font-bold text-lg`}>Estimated CO₂ saved</Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <MaterialIcons name="eco" size={24} color="#10B981" style={tw`mr-2`} />
            <Text style={tw`text-2xl font-bold`}>0 g</Text>
          </View>
        </View>

        {/* Menu Options */}
        <View style={tw`flex-col`}>
          <TouchableOpacity style={tw`flex-row items-center px-4 py-3`}>
            <MaterialIcons name="people" size={24} color="black" style={tw`mr-4`} />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold`}>Family and teens</Text>
              <Text style={tw`text-gray-600 text-sm`}>Teen and adult accounts</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={tw`flex-row items-center px-4 py-3`}>
            <MaterialIcons name="settings" size={24} color="black" style={tw`mr-4`} />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold`}>Settings</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={tw`flex-row items-center px-4 py-3`}>
            <MaterialIcons name="message" size={24} color="black" style={tw`mr-4`} />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold`}>Messages</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={tw`flex-row items-center px-4 py-3`}>
            <FontAwesome name="user" size={24} color="black" style={tw`mr-4`} />
            <View style={tw`flex-1`}>
              <Text style={tw`font-bold`}>Earn by driving or delivering</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default Profile;