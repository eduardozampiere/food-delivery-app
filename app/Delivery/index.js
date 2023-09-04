import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import DeliveryMap from "../../components/DeliveryMap";
import DeliveryInfo from "../../components/DeliveryInfo";

// import { Container } from './styles';
const dishes = [
  {
    id: 1,
    image: "https://picsum.photos/800",
    name: "BigTasty",
    description: "Some description",
    price: 29.9,
    quantity: 1,
  },
  {
    id: 2,
    image: "https://picsum.photos/800",
    name: "BigMac",
    description: "Some description",
    price: 29.9,
    quantity: 1,
  },
  {
    id: 3,
    image: "https://picsum.photos/800",
    name: "Cheddar",
    description: "Some description",
    price: 29.9,
    quantity: 2,
  },
];

const Delivery = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <DeliveryMap />
      <DeliveryInfo />
    </View>
  );
};

export default Delivery;
