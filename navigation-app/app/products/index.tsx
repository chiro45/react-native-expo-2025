import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductsScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>products</Text>
        <Link href={"/"}>Volver</Link>
      </View>
    </SafeAreaView>
  );
};

export default ProductsScreen;
