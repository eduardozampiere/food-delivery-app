import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { themeColors } from "../../theme";
import { Phone, User, X } from "react-native-feather";
import { useRouter } from "expo-router";

const DeliveryRiderInfo = () => {
  const router = useRouter();

  function goToHome() {
    router.push({
      params: "Home",
    });
  }

  return (
    <View
      style={{ backgroundColor: themeColors.bgColor(0.8) }}
      className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
    >
      <View
        className="p-1 rounded-full"
        style={{
          backgroundColor: "rgba(255 255 255 / 0.4)",
        }}
      >
        <User width={64} height={62} />
      </View>
      <View className="flex-1 ml-3">
        <Text className="text-lg font-bold text-white">Fulano de Tal</Text>
        <Text className="text-lg font-semibold text-white">Your Rider</Text>
      </View>

      <View className="flex-row items-center space-x-3 mr-3">
        <TouchableOpacity className="bg-white p-2 rounded-full">
          <Phone
            fill={themeColors.bgColor(1)}
            strokeWidth={1}
            stroke={themeColors.bgColor(1)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white p-2 rounded-full"
          onPress={goToHome}
        >
          <X strokeWidth={4} stroke="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryRiderInfo;
