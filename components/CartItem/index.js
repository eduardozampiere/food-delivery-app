import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { themeColors } from "../../theme";
import { Minus } from "react-native-feather";
import { useDispatch } from "react-redux";
import { add, remove } from "../../redux/slice/cart";
// import { Container } from './styles';

const CartItem = ({ item: _item }) => {
  const item = _item[0];
  const dispatch = useDispatch();
  function handleRemove(dish) {
    dispatch(remove(dish));
  }

  return (
    <View className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
      <Text className="font-bold" style={{ color: themeColors.text }}>
        {_item.length || 0} x
      </Text>
      <Image className="h-14 w-14 rounded-full" source={{ uri: item.image }} />
      <Text className="flex-1 font-bold text-gray-700">{item.name}</Text>
      <Text className="font-semibold text-base">
        R$ {(item.price * _item.length).toFixed(2)}
      </Text>
      <TouchableOpacity
        disabled={(_item.length || 0) === 0}
        className="p-1 rounded-full"
        style={{
          backgroundColor: themeColors.bgColor(
            (_item.length || 0) > 0 ? 1 : 0.3
          ),
        }}
        onPress={() => handleRemove(item)}
      >
        <Minus strokeWidth={2} height={20} width={20} stroke="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
