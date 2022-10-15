import React from "react";
import { SafeAreaView } from "react-native";
import Navigation from "./navigation";
import AnimeList from "./src/components/anime/animeList";
import Header from "./src/components/header";
import MangaList from "./src/components/manga/mangaList";

// export default function App() {
//   return (
//     <SafeAreaView className="flex-col pt-10 h-full bg-black">
//       <Header />
//       <AnimeList />
//       <MangaList />
//     </SafeAreaView>
//   );
// }
export default function App() {
  return <Navigation />;
}
