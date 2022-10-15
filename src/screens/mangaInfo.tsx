import React from "react";
import { Text, SafeAreaView } from "react-native";

const MangaInfo = ({ route }) => {
  //const selectedAnimeData = route.params.selectedAnime;

  console.log(route.params.selectedAnime.attributes.canonicalTitle);
  console.log("ola");
  return (
    <SafeAreaView>
      <Text>Ola</Text>
    </SafeAreaView>
  );
};

export default MangaInfo;
