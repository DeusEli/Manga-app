import React from "react";
import { FlatList, Text, View, SafeAreaView } from "react-native";

const AnimeInfo = ({ route }) => {
  //const selectedAnimeData = route.params.selectedAnime;

  console.log(route.params.selectedAnime.attributes.canonicalTitle);
  console.log("ola");
  return (
    <SafeAreaView>
      <Text>Ola</Text>
    </SafeAreaView>
  );
};

export default AnimeInfo;
