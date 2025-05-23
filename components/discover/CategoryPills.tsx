import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

interface Category {
  id: number;
  name: string;
  icon: string;
}

interface CategoryPillsProps {
  categories: Category[];
  initialActiveId?: number;
  onCategoryChange?: (categoryId: number) => void;
}

const CategoryPills: React.FC<CategoryPillsProps> = ({ 
  categories, 
  initialActiveId = 1, 
  onCategoryChange 
}) => {
  const [activeCategory, setActiveCategory] = useState<number>(initialActiveId);

  const handleCategoryClick = (categoryId: number) => {
    setActiveCategory(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };

  return (
    <View style={tw`mx-4 mb-4`}>
      <Text style={tw`text-black text-lg font-medium mb-2`}>Explore Nearby</Text>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`flex flex-row gap-2 pb-2`}
      >
        {categories.map((category) => (
          <TouchableOpacity 
            key={category.id}
            style={tw`px-3 py-1 rounded-full flex flex-row items-center gap-1 border ${
              activeCategory === category.id ? 'bg-green-500 border-green-500' : 'bg-gray-100 border-gray-300'
            }`}
            onPress={() => handleCategoryClick(category.id)}
          >
            <Text>{category.icon}</Text>
            <Text style={tw`text-sm ${
              activeCategory === category.id ? 'text-white' : 'text-gray-700'
            }`}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryPills;