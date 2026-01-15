import { Redirect } from "expo-router";

const App = () => {
  return <Redirect href={"/home"}></Redirect>;

  // (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-2.5">
  //       <Text className="text-3xl text-primary font-work-black">Hola</Text>
  //       <Text className="text-3xl text-tertiary">Hola</Text>
  //       <Text className="text-3xl text-blue-500">Hola</Text>
  //       <Link href={"/products"}>Ir a productos</Link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
