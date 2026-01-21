import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "indigo",
        
        // headerShown: false,
        // tabBarStyle: {
        //   backgroundColor: 'black',
        // },
        // tabBarActiveBackgroundColor: 'red',
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          headerShown: false,
          title: "Favoritos",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          //tabBarShowLabel:false, oculta el label de la app
          title: "Home Screen",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="star-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
