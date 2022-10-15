import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import AnimeList from "../components/anime/animeList";
import Header from "../components/header";
import MangaList from "../components/manga/mangaList";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-col pt-10 h-full bg-black">
      <AnimeList />
      <MangaList />
    </SafeAreaView>
  );
};

export default HomeScreen;
