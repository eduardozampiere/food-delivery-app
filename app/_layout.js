import React from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import store from "../redux/store";

import { Provider } from "react-redux";
const Layout = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Cart/index"
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="OrderPreparing/index"
          options={{
            presentation: "fullScreenModal",
          }}
        />
        <Stack.Screen
          name="Delivery/index"
          options={{
            presentation: "fullScreenModal",
          }}
        />
      </Stack>
    </Provider>
  );
};

export default Layout;
