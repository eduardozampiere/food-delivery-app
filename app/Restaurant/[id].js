import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { ArrowLeft } from "react-native-feather";
import { themeColors } from "../../theme";
import RestaurantInfo from "../../components/RestaurantInfo";
import Menu from "../../components/Menu";
import CartIcon from "../../components/CartIcon";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../../redux/slice/restaurant";
import { getCart } from "../../redux/slice/cart";

const Restaurant = () => {
  const restaurant = useLocalSearchParams();
  const router = useRouter();
  const totalItems = useSelector(getCart).length;

  const dispatch = useDispatch();
  useEffect(() => {
    if (restaurant?.id) {
      dispatch(setRestaurant({ ...restaurant }));
    }
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <View>
      <ScrollView
        style={{
          flexGrow: 1,
        }}
      >
        {totalItems ? <CartIcon /> : null}
        <StatusBar style="light" />
        <View className="relative">
          <Image className="w-full h-72" source={{ uri: restaurant.image }} />
          <TouchableOpacity
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
            onPress={handleBack}
          >
            <ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{restaurant.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <RestaurantInfo restaurant={restaurant} />
            </View>
            <Text className="text-gray-500 mt-2">{restaurant.description}</Text>
          </View>
        </View>

        <Menu restaurantId={restaurant?.id} />
      </ScrollView>
    </View>
  );
};

export default Restaurant;
