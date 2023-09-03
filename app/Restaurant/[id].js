import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { ArrowLeft } from "react-native-feather";
import { themeColors } from "../../theme";
import RestaurantInfo from "../../components/RestaurantInfo";
import Menu from "../../components/Menu";
import CartIcon from "../../components/CartIcon";

const Restaurant = () => {
  const restaurant = useLocalSearchParams();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  function getDishes(id) {
    return [
      {
        id: 1,
        image: "https://picsum.photos/800",
        name: "BigTasty",
        description: "Some description",
        price: 29.9,
      },
      {
        id: 2,
        image: "https://picsum.photos/800",
        name: "BigMac",
        description: "Some description",
        price: 29.9,
      },
      {
        id: 3,
        image: "https://picsum.photos/800",
        name: "Cheddar",
        description: "Some description",
        price: 29.9,
      },
    ];
  }

  return (
    <View>
      <ScrollView>
        <CartIcon />
        <View className="relative">
          <Image className="w-full h-72" source={{ uri: restaurant.image }} />
          <TouchableOpacity
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
            onPress={handleBack}
          >
            <ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{restaurant.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <RestaurantInfo restaurant={restaurant} />
            </View>
            <Text className="text-gray-500 mt-2">{restaurant.description}</Text>
          </View>
        </View>

        <Menu dishes={getDishes(restaurant.id)} />
      </ScrollView>
    </View>
  );
};

export default Restaurant;
