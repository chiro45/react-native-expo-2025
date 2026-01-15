import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Settings</Text>
        <Link href={"/"}>Volver</Link>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
