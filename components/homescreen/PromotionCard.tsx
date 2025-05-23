import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

interface PromotionCardProps {
  title: string;
  subtitle: string;
  image: string; // Change to string for URL
  backgroundColor: string;
  isWide?: boolean;
}

export default function PromotionCard({ 
  title, 
  subtitle, 
  image, 
  backgroundColor, 
  isWide = true 
}: PromotionCardProps) {
  // Fallback image URL for invalid or empty image URLs
  const fallbackImage = 'https://example.com/images/fallback.png';

  return (
    <TouchableOpacity 
      style={[
        tw`rounded-xl overflow-hidden`,
        isWide ? tw`w-[48%]` : tw`w-[48%]`,
        backgroundColor ? { backgroundColor } : tw`bg-gray-100 dark:bg-gray-800`
      ]}
    >
      <View style={tw`p-3 flex-row justify-between items-center h-24`}>
        <View style={tw`flex-1`}>
          {title && (
            <Text style={tw`text-sm font-medium text-black dark:text-white mb-1`}>
              {title}
            </Text>
          )}
          {subtitle && (
            <Text style={tw`text-xs text-gray-500 dark:text-gray-400`}>
              {subtitle}
            </Text>
          )}
        </View>
        
        {image && (
          <View style={tw`w-12 h-12 justify-center items-center`}>
            <Image 
              source={{ uri: image || fallbackImage }} // Use uri for URL-based images
              style={tw`w-10 h-10`}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}