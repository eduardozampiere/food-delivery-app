import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import SearchBar from "../../components/SearchBar";
// import { Container } from './styles';

const Home = () => {
  return (
    <SafeAreaView className="bg-white">
      <SearchBar />
    </SafeAreaView>
  );
};

export default Home;
