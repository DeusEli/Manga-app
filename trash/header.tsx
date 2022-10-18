import React from "react";
import { View, Image, Text } from "react-native";

export default function Header() {
  return (
    <View className="flex flex-row justify-between p-4">
      <View className="flex flex-row items-center">
        <Image
          className="w-10 h-10"
          resizeMode="cover"
          source={require("../../asset/img/apiaryLogo.png")}
        ></Image>
        <Text className="pl-2 text-base text-white">APIARY</Text>
      </View>
    </View>
  );
}
