import React from "react";
import { View, Text, Image } from "react-native";
import DeliveryRiderInfo from "../DeliveryRiderInfo";

const DeliveryInfo = () => {
  return (
    <View className="rounded-t-3xl -mt-12 bg-white relative">
      <View className="flex-row justify-between px-5 pt-10">
        <View>
          <Text className="text-lg text-gray-700 font-semibold">
            Estimated Arrival
          </Text>
          <Text className="text-3xl font-extrabold text-gray-700">
            20-30 Minutes
          </Text>
          <Text className="mt-2 text-gray-700 font-semibold">
            Your order is on the way
          </Text>
        </View>
        <Image
          source={require("../../assets/images/bikeGuy2.gif")}
          className="w-24 h-24"
        />
      </View>

      <DeliveryRiderInfo />
    </View>
  );
};

export default DeliveryInfo;
