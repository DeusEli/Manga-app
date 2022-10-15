import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Text, View, SafeAreaView } from "react-native";
import AnimeList from "./src/components/animeList";
// import ./src/tailwindcss-react-native.d.ts;

export default function App() {
  return (
    <SafeAreaView className="flex-col mt-10 ml-6">
      <AnimeList />
    </SafeAreaView>
  );
}
