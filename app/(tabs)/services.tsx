import React, { FC, useCallback, useState } from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';

// Constants
const { width } = Dimensions.get('window');
const SEARCH_EMOJI = '🔍';
const COLUMN_COUNT = 4;
const OFFER_WIDTH = width * 0.75;

// Interfaces
interface ServiceItem {
  id: string;
  title: string;
  emoji: string;
  backgroundColor: string;
}

interface OfferItem {
  id: string;
  title: string;
  description: string;
  emoji: string;
  backgroundColor: string;
  textColor: string;
}

// Data
const MAIN_SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Ride',
    emoji: '🚗',
    backgroundColor: '#F3F8FF',
  },
  {
    id: '2',
    title: 'Courier',
    emoji: '📦',
    backgroundColor: '#FFF6EC',
  },
  {
    id: '3',
    title: 'Store Pickup',
    emoji: '🏬',
    backgroundColor: '#F0FFFA',
  },
  {
    id: '4',
    title: 'Emergency',
    emoji: '🦺',
    backgroundColor: '#FFF0F0',
  },
];

const QUICK_SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Food',
    emoji: '🍔',
    backgroundColor: '#FFE8E8',
  },
  {
    id: '2',
    title: 'Grocery',
    emoji: '🛒',
    backgroundColor: '#E6FFF2',
  },
  {
    id: '3',
    title: 'Package',
    emoji: '📬',
    backgroundColor: '#F0F0FF',
  },
  {
    id: '4',
    title: 'Pharmacy',
    emoji: '💊',
    backgroundColor: '#FFEFDB',
  },
  {
    id: '5',
    title: 'Pet Supplies',
    emoji: '🐶',
    backgroundColor: '#DBFFFD',
  },
  {
    id: '6',
    title: 'Alcohol',
    emoji: '🍷',
    backgroundColor: '#F3E8FF',
  },
];

const FEATURED_OFFERS: OfferItem[] = [
  {
    id: '1',
    title: 'Get 20% off your first ride',
    description: 'Use code WELCOME20',
    emoji: '🎉',
    backgroundColor: '#4A80FF',
    textColor: '#FFFFFF',
  },
  {
    id: '2',
    title: 'Free delivery on groceries',
    description: 'Orders over $30',
    emoji: '🛍️',
    backgroundColor: '#FF6B6B',
    textColor: '#FFFFFF',
  },
];

// Components
const ServiceCard: FC<{ item: ServiceItem; isMain?: boolean }> = ({ item, isMain = false }) => (
  <TouchableOpacity style={tw`${isMain ? 'mx-2 mb-4' : 'mr-3 items-center w-20'}`}>
    <View
      style={[
        tw`${
          isMain
            ? 'w-16 h-16 rounded-full items-center justify-center mb-2`p-2'
            : 'w-16 h-16 rounded-full items-center justify-center mb-2`'
        }`,
        { backgroundColor: item.backgroundColor },
      ]}
    >
      <Text style={tw`${isMain ? 'text-2xl' : 'text-2xl'}`}>{item.emoji}</Text>
    </View>
    <Text style={tw`${isMain ? 'text-base' : 'text-sm'} text-xs text-center text-black dark:text-white`}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

const OfferCard: FC<{ item: OfferItem }> = ({ item }) => (
  <TouchableOpacity
    style={[tw`flex-row mr-3 rounded-2xl overflow-hidden p-4`, { backgroundColor: item.backgroundColor, width: OFFER_WIDTH }]}
  >
    <View style={tw`flex-1 pr-2 justify-center`}>
      <Text style={[tw`text-base font-semibold mb-1`, { color: item.textColor }]}>{item.title}</Text>
      <Text style={[tw`text-sm opacity-90`, { color: item.textColor }]}>{item.description}</Text>
    </View>
    <View style={tw`w-20 h-20 justify-center items-center`}>
      <Text style={tw`text-3xl`}>{item.emoji}</Text>
    </View>
  </TouchableOpacity>
);

const ServicesScreen: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  const renderMainService = useCallback(({ item }: { item: ServiceItem }) => <ServiceCard item={item} isMain />, []);
  const renderQuickService = useCallback(({ item }: { item: ServiceItem }) => <ServiceCard item={item} />, []);
  const renderOffer = useCallback(({ item }: { item: OfferItem }) => <OfferCard item={item} />, []);

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={tw`px-5 pt-5 pb-4`}>
          <Text style={tw`text-3xl font-bold text-black mb-1`}>Services</Text>
          <Text style={tw`text-base text-gray-500`}>What can we help you with today?</Text>
        </View>

        {/* Search Bar */}
        <View style={tw`flex-row items-center bg-white mx-5 rounded-xl px-4 py-3 mb-6 shadow-sm`}>
          <Text style={tw`text-gray-400 mr-2 text-base`}>{SEARCH_EMOJI}</Text>
          <TextInput
            style={tw`flex-1 text-base text-black`}
            placeholder="Search for services"
            value={searchQuery}
            onChangeText={handleSearchChange}
            placeholderTextColor="#A0A0A0"
            autoCapitalize="none"
            returnKeyType="search"
          />
        </View>

        {/* Main Services */}
        <View style={tw`mb-6`}>
          <Text style={tw`text-lg font-semibold text-black mx-5 mb-4`}>Go anywhere, get anything</Text>
          <FlatList
            data={MAIN_SERVICES}
            renderItem={renderMainService}
            keyExtractor={(item) => item.id}
            numColumns={COLUMN_COUNT}
            scrollEnabled={false}
            contentContainerStyle={tw`px-3`}
          />
        </View>

        {/* Quick Services */}
        <View style={tw`mb-6`}>
          <Text style={tw`text-lg font-semibold text-black mx-5 mb-4`}>Quick services</Text>
          <FlatList
            data={QUICK_SERVICES}
            renderItem={renderQuickService}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`pl-5 pr-2 text-sm`}
          />
        </View>

        {/* Featured Offers */}
        <View style={tw`mb-6 `}>
          <Text style={tw`text-lg font-semibold text-black mx-5 mb-4`}>Special offers</Text>
          <FlatList
            data={FEATURED_OFFERS}
            renderItem={renderOffer}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`pl-5 pr-2`}
          />
        </View>

        {/* Bottom Spacing */}
        <View style={tw`h-8`} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServicesScreen;