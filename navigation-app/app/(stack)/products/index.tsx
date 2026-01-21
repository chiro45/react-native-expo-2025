import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { productsStore } from "@/store/products.store";

const ProductsScreen = () => {
  return (
    <View>
      <FlatList
        data={productsStore}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10 px-4">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="">{item.description}</Text>
            <View className="flex flex-row justify-between">
              <Text className="text-2xl font-work-black">{item.price}</Text>
              <Link
                href={`/(stack)/products/${item.id}`}
                className="text-primary"
              >
                View details
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
