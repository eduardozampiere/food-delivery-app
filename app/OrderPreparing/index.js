import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, Image } from "react-native";

// import { Container } from './styles';

const OrderPreparing = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push({
        pathname: "Delivery",
      });
    }, 3000);
  }, []);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require("../../assets/images/delivery.gif")}
        className="h-80 w-80"
      />
    </View>
  );
};

export default OrderPreparing;
