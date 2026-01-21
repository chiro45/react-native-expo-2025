import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation, useRouter } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      router.back();
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            size={20}
            className="mr-5"
            onPress={() => onHeaderLeftClick(canGoBack)}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home Screen",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Products products",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Profile Screen",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Settings Screen",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
