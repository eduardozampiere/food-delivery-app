import React from "react";
import { View } from "react-native";
import FeaturedItem from "../FeaturedItem";
// import { Container } from './styles';
const featureds = [
  {
    id: 1,
    title: "Free Delivery",
    restaurants: [
      {
        id: 1,
        image: "https://picsum.photos/800",
        name: "McDonalds",
        stars: 1500,
        reviews: 750,
        category: "Fast Food",
        address: "Av Intendente magalhães",
        description: "A simple description",
        lat: -22.89,
        lon: -43.352,
        dishes: [
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
        ],
      },
    ],
    description: "Restaurants with no delivery tax",
  },
  {
    id: 2,
    title: "Hot and Spicy",
    restaurants: [
      {
        id: 2,
        image: "https://picsum.photos/800",
        name: "KFC",
        stars: 342,
        reviews: 250,
        category: "Fast Food",
        address: "Av Intendente magalhães",
        lat: -26.89,
        lon: -23.352,
        dishes: [
          {
            id: 1,
            image: "https://picsum.photos/800",
            name: "Fired Chicken",
            description: "Some description",
            price: 49.9,
            quantity: 1,
          },
        ],
      },
    ],
    description: "Soft and tender fired chicken",
  },
];
const Featured = () => {
  return (
    <View className="mt-5">
      {featureds.map((featured) => (
        <FeaturedItem featured={featured} key={featured.id} />
      ))}
    </View>
  );
};

export default Featured;
