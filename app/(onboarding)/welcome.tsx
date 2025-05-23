import { router } from 'expo-router'
import React, { useRef, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from "react-native-swiper"
import tw from 'twrnc'
import CustomButton from '../../constants/CustomButton'
import { onboarding } from '../../constants/OnboardingData'

// Define type for Swiper ref
type SwiperRef = {
  scrollBy: (index: number) => void;
}

const Welcome = () => {
  // Properly type the useRef
  const swiperRef = useRef<Swiper>(null);
  const [activeindex, setActiveIndex] = useState(0)
  const isLastSlide = activeindex === onboarding.length - 1
  
  return (
    <SafeAreaView style={tw`flex h-full items-center justify-between bg-white`}>
      <TouchableOpacity
        onPress={() => {
          router.replace("/(onboarding)/sign-up");
        }}
        style={tw`w-full flex justify-end items-end p-5`}
      >
        <Text style={tw`text-black font-semibold`}>Skip</Text>
      </TouchableOpacity>
     
      <Swiper
        ref={swiperRef}
        loop={false}
        dotStyle={tw`w-8 h-2 mx-1 bg-gray-500 rounded-full`}
        activeDotStyle={tw`w-8 h-2 mx-1 bg-[#414141] rounded-full`}
        paginationStyle={tw`mb-10`}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} style={tw`flex items-center justify-center p-5`}>
            <Image
              source={item.image}
              style={tw`w-full h-64`}
              resizeMode="contain"
            />
            <View style={tw`flex flex-row items-center justify-center w-full mt-10`}>
              <Text style={tw`text-black text-3xl font-bold mx-10 text-center`}>
                {item.title}
              </Text>
            </View>
            <Text style={tw`text-base text-center text-gray-500 mx-10 mt-3`}>
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(tabs)")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10 mb-5"
      />
    </SafeAreaView>
  )
}

export default Welcome