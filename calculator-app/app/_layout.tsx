import { globalStyles } from "@/styles/global-styles";
import * as NavigationBar from "expo-navigation-bar";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, Text, View } from "react-native";
const isAndroid = Platform.OS === "android";

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black");
}

const RootLayout = () => {
  return (
    <View style={globalStyles.background}>
      <Text>_layout</Text>
      <Slot />

      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
