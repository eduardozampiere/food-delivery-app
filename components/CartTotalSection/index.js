import React from "react";
import { View, Text } from "react-native";
import { themeColors } from "../../theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { getCartTotal } from "../../redux/slice/cart";

const CartTotalSection = () => {
  const deliveryFee = 5;
  const totalPrice = useSelector(getCartTotal);
  const router = useRouter();

  function handlePreparing() {
    router.push({
      pathname: "OrderPreparing",
    });
  }
  return (
    <View
      style={{
        backgroundColor: themeColors.bgColor(0.2),
      }}
      className="p-6 px-8 rounded-t-3xl space-y-4"
    >
      <View className="flex-row justify-between">
        <Text className="text-gray-700">Subtotal</Text>
        <Text className="text-gray-700">R$ {totalPrice.toFixed(2)}</Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="text-gray-700">Delivery Fee</Text>
        <Text className="text-gray-700">R$ {deliveryFee.toFixed(2)}</Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="text-gray-700 font-extrabold">Total</Text>
        <Text className="text-gray-700 font-extrabold">
          R$ {(totalPrice + deliveryFee).toFixed(2)}
        </Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={handlePreparing}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Text className="text-white text-center font-bold text-lg">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartTotalSection;
