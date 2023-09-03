import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { themeColors } from "../../theme";
import { Minus, Plus } from "react-native-feather";

// import { Container } from './styles';

const DishItem = ({ dish }) => {
  const [itensAdded, setItensAdded] = useState(0);

  function handleAdd(value = 1) {
    setItensAdded((prev) => prev + value);
  }

  return (
    <View className="flex-row items-center  bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{
          height: 100,
          width: 100,
        }}
        source={{ uri: dish.image }}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{dish.name}</Text>
          <Text className="text-gray-700">{dish.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">
            R$ {dish.price}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              disabled={itensAdded === 0}
              className="p-1 rounded-full"
              style={{
                backgroundColor: themeColors.bgColor(itensAdded > 0 ? 1 : 0.3),
              }}
              onPress={() => handleAdd(-1)}
            >
              <Minus strokeWidth={2} height={20} width={20} stroke="white" />
            </TouchableOpacity>
            <Text className="px-3">{itensAdded}</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{
                backgroundColor: themeColors.bgColor(1),
              }}
              onPress={() => handleAdd(1)}
            >
              <Plus strokeWidth={2} height={20} width={20} stroke="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const Menu = ({ dishes }) => {
  return (
    <View className="pb-36 bg-white">
      <Text className="px-4 pt-4 text-2xl font-bold">Menu</Text>
      {dishes.map((dish) => (
        <DishItem key={dish.id} dish={dish} />
      ))}
    </View>
  );
};

export default Menu;
