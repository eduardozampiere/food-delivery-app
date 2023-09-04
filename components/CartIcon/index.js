import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { themeColors } from "../../theme";
import { ShoppingCart } from "react-native-feather";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { getCartTotal, getCart } from "../../redux/slice/cart";

const CartIcon = () => {
  const router = useRouter();
  const totalItems = useSelector(getCart).length;
  const totalPrice = useSelector(getCartTotal);

  function goToCart() {
    router.push({
      pathname: "Cart",
    });
  }

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={goToCart}
        style={{
          backgroundColor: themeColors.bgColor(1),
        }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{
            backgroundColor: "rgba(255 255 255 / 0.3)",
          }}
        >
          <Text className="font-extrabold text-lg text-white">
            {totalItems}
          </Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-lg text-white">
          View Cart
        </Text>
        <ShoppingCart stroke="white" />
        <Text className=" pl-4 font-extrabold text-white text-lg">
          R$ {totalPrice.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
