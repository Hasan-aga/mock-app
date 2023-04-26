import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MyWebview from "./MyWebview";
import { useState } from "react";

export default function App() {
  const [isVisible, setisVisible] = useState(true);
  if (__DEV__) {
    import("./ReactotronConfig").then(() =>
      console.log("Reactotron Configured")
    );
  }
  return (
    <View style={{ flexDirection: "column", height: "100%", width: "100%" }}>
      <View style={{ flex: 1, alignSelf: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => setisVisible(!isVisible)}>
          <Text style={{ fontSize: 20, color: "#007aff", marginBottom: 20 }}>
            {isVisible ? "Hide View" : "Show View"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2 }}>
        <MyWebview isVisible={isVisible} link="http://10.0.2.2:3000/" />
      </View>
    </View>
  );
}
