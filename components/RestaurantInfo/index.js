import React, { memo } from "react";
import { Text, View, Image } from "react-native";
import { MapPin } from "react-native-feather";

const RestaurantInfo = ({ restaurant }) => {
  return (
    <>
      <View className="flex-row items-center space-x-1">
        <Image
          className="h-4 w-4"
          source={require("../../assets/images/fullStar.png")}
        />
        <Text className="text-xs">
          <Text className="text-green-700">{restaurant?.stars || 0}</Text>
          <Text className="text-gray-700">
            ({restaurant?.reviews || 0} review) •{" "}
            <Text className="font-semibold">{restaurant?.category}</Text>
          </Text>
        </Text>
      </View>
      <View className="flex-row items-center space-x-1">
        <MapPin color="gray" width={15} height={15} />
        <Text className="text-gray-700 text-xs">{restaurant.address}</Text>
      </View>
    </>
  );
};

export default memo(RestaurantInfo);
