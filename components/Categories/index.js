import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import CategoryItem from "../CategoriesItem";

const categories = [
  { id: 1, name: "Pizza", image: "https://picsum.photos/800" },
  { id: 2, name: "Hamburger", image: "https://picsum.photos/800" },
  { id: 3, name: "Hotdog", image: "https://picsum.photos/800" },
  { id: 4, name: "Massas", image: "https://picsum.photos/800" },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  function handleActiveCategory(id) {
    setActiveCategory(id);
  }
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category) => (
          <CategoryItem
            category={category}
            key={category.id}
            onPress={() => handleActiveCategory(category.id)}
            isActive={category.id === activeCategory}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
