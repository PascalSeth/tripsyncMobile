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
const OFFER_WIDTH = width * 0.75;

// Interfaces
interface OfferItem {
  id: string;
  title: string;
  description: string;
  emoji: string;
  backgroundColor: string;
  textColor: string;
}

// Data
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
const OfferCard: FC<{ item: OfferItem }> = ({ item }) => (
  <TouchableOpacity
    style={[tw`flex-row mr-3 rounded-2xl overflow-hidden p-4 mb-4`, { backgroundColor: item.backgroundColor, width: OFFER_WIDTH }]}
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

const NoOffersMessage: FC = () => (
  <View style={tw`flex-1 justify-center items-center px-5 py-10`}>
    <Text style={tw`text-5xl mb-4`}>😔</Text>
    <Text style={tw`text-lg font-semibold text-black mb-2`}>No Offers Available</Text>
    <Text style={tw`text-base text-gray-500 text-center`}>
      Sorry, we have no offers for you right now. Check back later for exciting deals!
    </Text>
  </View>
);

const OffersScreen: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  const renderOffer = useCallback(({ item }: { item: OfferItem }) => <OfferCard item={item} />, []);

  // Filter offers based on search query
  const filteredOffers = FEATURED_OFFERS.filter(
    (offer) =>
      offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={tw`px-5 pt-5 pb-4`}>
          <Text style={tw`text-3xl font-bold text-black mb-1`}>Offers</Text>
          <Text style={tw`text-base text-gray-500`}>Discover our latest deals and promotions</Text>
        </View>

        {/* Search Bar */}
        <View style={tw`flex-row items-center bg-white mx-5 rounded-xl px-4 py-3 mb-6 shadow-sm`}>
          <Text style={tw`text-gray-400 mr-2 text-base`}>{SEARCH_EMOJI}</Text>
          <TextInput
            style={tw`flex-1 text-base text-black`}
            placeholder="Search for offers"
            value={searchQuery}
            onChangeText={handleSearchChange}
            placeholderTextColor="#A0A0A0"
            autoCapitalize="none"
            returnKeyType="search"
          />
        </View>

        {/* Offers List or No Offers Message */}
        {filteredOffers.length > 0 ? (
          <View style={tw`mb-6`}>
            <Text style={tw`text-lg font-semibold text-black mx-5 mb-4`}>Featured Offers</Text>
            <FlatList
              data={filteredOffers}
              renderItem={renderOffer}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={tw`pl-5 pr-2`}
            />
          </View>
        ) : (
          <NoOffersMessage />
        )}

        {/* Bottom Spacing */}
        <View style={tw`h-8`} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OffersScreen;