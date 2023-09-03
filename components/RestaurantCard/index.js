import React, { memo } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { themeColors } from "../../theme";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MapPin } from "react-native-feather";
import { useRouter } from "expo-router";
import RestaurantInfo from "../RestaurantInfo";

const RestaurantCard = ({ restaurant }) => {
  const { name, image } = restaurant;
  const router = useRouter();

  function goToRestaurant(id) {
    router.push({
      pathname: `Restaurant/${id}`,
      params: { ...restaurant },
    });
  }

  return (
    <TouchableWithoutFeedback onPress={() => goToRestaurant(restaurant.id)}>
      <View
        className="mr-6 bg-white rounded-3xl shadow-lg"
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={{ uri: image }} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{name}</Text>
          <RestaurantInfo restaurant={restaurant} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(RestaurantCard);
