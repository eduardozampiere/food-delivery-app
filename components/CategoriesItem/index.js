import React, { memo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default CategoryItem = memo(({ category, onPress, isActive }) => {
  const buttonStyle = isActive ? "bg-gray-600" : "bg-gray-200";
  const textStyle = isActive ? "font-semibold text-gray-800" : "text-gray-500";
  return (
    <View className="flex justify-center items-center mr-6">
      <TouchableOpacity
        className={`p-1 rounded-full shadow bg-gray-200 ${buttonStyle}`}
        onPress={onPress}
      >
        <Image
          source={{ uri: category.image }}
          style={{ width: 45, height: 45 }}
        />
      </TouchableOpacity>
      <Text className={`text-sm ${textStyle}`}>{category.name}</Text>
    </View>
  );
});
