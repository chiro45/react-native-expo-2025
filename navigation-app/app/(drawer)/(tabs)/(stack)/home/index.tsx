import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <SafeAreaView>
      <View className="px-10 flex flex-col gap-2">
        <Text className="mb-5 mt-10">Home screen</Text>
        <CustomButton
          className="mb-2"
          color="primary"
          textButton="Products"
          onPress={() => router.push("/products")}
        />
        <CustomButton
          color="secondary"
          textButton="Profile"
          onPress={() => router.push("/profile")}
        />
        <CustomButton
          color="primary"
          textButton="Settings"
          onPress={() => router.push("/settings")}
        />
        <CustomButton
          color="primary"
          textButton="Products"
          variant="text-only"
          onPress={() => router.push("/products")}
        />
        <CustomButton
          onPress={onToggleDrawer}
          textButton="Abrir Menu"
        ></CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
