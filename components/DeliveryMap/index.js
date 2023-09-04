import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../../theme";
import { useSelector } from "react-redux";
import { getRestaurant } from "../../redux/slice/restaurant";

// const restaurant = {
//   name: "McDonald's",
//   lat: -22.89,
//   lon: -43.352,
// };

const DeliveryMap = () => {
  const restaurant = useSelector(getRestaurant);
  console.log("res", restaurant);
  return (
    <>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lon,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lon,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
    </>
  );
};

export default DeliveryMap;
