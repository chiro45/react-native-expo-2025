import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Profile</Text>
        <Link href={"/"}>Volver</Link>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
