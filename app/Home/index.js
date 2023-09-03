import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import SearchBar from "../../components/SearchBar";
import Categories from "../../components/Categories";
import Featured from "../../components/Featured";
// import { Container } from './styles';

const Home = () => {
  return (
    <SafeAreaView className="bg-white">
      <SearchBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Categories />

        <Featured />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
