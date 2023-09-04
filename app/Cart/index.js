import { useRouter } from "expo-router";
import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { ArrowLeft } from "react-native-feather";
import { themeColors } from "../../theme";
import CartDeliverySection from "../../components/CartDeliverySection";
import CartItemsSection from "../../components/CartItemsSection";
import CartTotalSection from "../../components/CartTotalSection";
import { getRestaurant } from "../../redux/slice/restaurant";
import { useSelector } from "react-redux";

const Cart = () => {
  const router = useRouter();
  const restaurant = useSelector(getRestaurant);

  function handleBack() {
    console.log("aqui");
    // router.back();
  }

  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 ">
        {/* <TouchableOpacity
          className="absolute top-5 left-4 bg-gray-50 p-2 rounded-full shadow"
          style={{
            backgroundColor: themeColors.bgColor(1),
          }}
          onPress={() => console.log("ola mundo")}
        >
          <ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity> */}

        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      <CartDeliverySection />
      <CartItemsSection />
      <CartTotalSection />
    </View>
  );
};

export default Cart;
