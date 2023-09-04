import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { themeColors } from "../../theme";

const CartDeliverySection = () => {
  return (
    <View
      style={{
        backgroundColor: themeColors.bgColor(0.2),
      }}
      className="flex-row px-4 items-center"
    >
      <Image
        source={require("../../assets/images/bikeGuy.png")}
        className="w-20 h-20 rounded-full"
      />
      <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
      <TouchableOpacity>
        <Text
          className="font-bold"
          style={{
            color: themeColors.text,
          }}
        >
          Change
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartDeliverySection;
