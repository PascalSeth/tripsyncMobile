// app/(tabs)/(index)/index.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Header from '../../../components/homescreen/Header';
import PromotionCard from '../../../components/homescreen/PromotionCard';
import SearchBars from '../../../components/homescreen/Search';
import SectionHeader from '../../../components/homescreen/SectionHeader';
import ServiceOption from '../../../components/homescreen/ServiceOption';

export default function HomeScreen() {
  const router = useRouter();

  const serviceOptions: { id: number; name: string; icon: string; href: string }[] = [
    { id: 1, name: 'Ride', icon: '🚗', href: '/rides' }, 
    { id: 2, name: 'Courier', icon: '📦', href: '/courier' },
    { id: 3, name: 'Store Pickup', icon: '🛒', href: '/store-pickup' },
    { id: 4, name: 'Emergency', icon: '🦺', href: '/' },
  ];

  const promotions = [
    {
      id: 1,
      title: 'Safety Toolkit →',
      subtitle: 'On-trip help with safety issues',
      image: 'data:image/jpeg;base64,/9j/...',
      backgroundColor: '#E6F2FF',
    },
    {
      id: 2,
      title: 'Try Courier →',
      subtitle: 'For the things you need',
      image: 'https://example.com/images/courier.png',
      backgroundColor: '#F0F0F0',
    },
  ];

  const teensPromos = [
    {
      id: 1,
      title: 'TripSync for teens',
      subtitle: '',
      image: 'https://example.com/images/teens-1.png',
      backgroundColor: '#E8F4FF',
    },
    {
      id: 2,
      title: '',
      subtitle: '',
      image: 'https://example.com/images/teens-2.png',
      backgroundColor: '#F0F0F0',
    },
  ];

  // Handle navigation to the services screen
  const handleSeeAllPress = () => {
    // Use '/(tabs)/services' instead of '/services' to match the router path structure
    router.push('/(tabs)/services' as any);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-black`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`p-4`}>
          <Header />
          <SearchBars />
          <SectionHeader 
            title="Suggestions" 
            actionText="See all" 
            onPress={handleSeeAllPress}
          />
          <View style={tw`flex-row justify-between mt-3`}>
            {serviceOptions.map((option) => (
              <ServiceOption
                key={option.id}
                name={option.name}
                icon={option.icon}
                href={option.href}
              />
            ))}
          </View>
          <SectionHeader title="More ways to use TripSync" actionText="" onPress={''}/>
          <View style={tw`flex-row justify-between mt-3`}>
            {promotions.map((promo) => (
              <PromotionCard
                key={promo.id}
                title={promo.title}
                subtitle={promo.subtitle}
                image={promo.image}
                backgroundColor={promo.backgroundColor}
              />
            ))}
          </View>
          <SectionHeader title="TripSync for teens" actionText="" onPress={''}/>
          <View style={tw`flex-row justify-between mt-3`}>
            {teensPromos.map((promo) => (
              <PromotionCard
                key={promo.id}
                title={promo.title}
                subtitle={promo.subtitle}
                image={promo.image}
                backgroundColor={promo.backgroundColor}
              />
            ))}
          </View>
        </View>
        {/* <Redirect href={'/(onboarding)/welcome'}/> */}
      </ScrollView>
    </SafeAreaView>
  );
}