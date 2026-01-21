import { productsStore } from "@/store/products.store";
import { useNavigation } from "@react-navigation/native";
import { Redirect, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const product = productsStore.find((item) => item.id === id);
  const navigation = useNavigation();

  useEffect(() => {
    if (product) {
      navigation.setOptions({
        title: product?.title ?? "Product",
      });
    }
  }, [product, navigation]);

  if (!product) {
    return <Redirect href={"/"} />;
  }

  return (
    <View className="px-5 mt-2">
      <Text className="text-2xl font-work-black">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-work-black">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
