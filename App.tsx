import React from "react";
import { SafeAreaView } from "react-native";
import AnimeList from "./src/components/animeList";
import MangaList from "./src/components/mangaList";

export default function App() {
  return (
    <SafeAreaView className="flex-col pt-10 h-full bg-black">
      <AnimeList />
      <MangaList />
    </SafeAreaView>
  );
}
