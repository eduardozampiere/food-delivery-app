import React, { memo } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { themeColors } from "../../theme";
import { ScrollView } from "react-native-gesture-handler";
import RestaurantCard from "../RestaurantCard";
// import { Container } from './styles';

const FeaturedItem = ({ featured }) => {
  const { title, description, restaurants } = featured;
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-ls">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5"
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default memo(FeaturedItem);
