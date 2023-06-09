import Reactotron from "reactotron-react-native";

// Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
//   .configure() // controls connection & communication settings
//   .useReactNative() // add all built-in react native plugins
//   .connect(); // let's connect!

Reactotron
  // Your real ip address 👇
  .configure({ host: "192.168.0.226" })
  .useReactNative()
  .connect();
