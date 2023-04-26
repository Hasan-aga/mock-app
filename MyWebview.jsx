import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

const runFirst = `
window.test="injected js ran";
`;

export default function MyWebview({ link, isVisible }) {
  console.log(isVisible);
  const pureWebview = useMemo(
    () => (
      <WebView
        source={{ uri: link }}
        injectedJavaScript={runFirst}
        onMessage={(event) => {
          alert(event.nativeEvent.data);
        }}
      />
    ),
    [link]
  );
  return (
    <View style={isVisible ? styles.container : styles.hiddenView}>
      {pureWebview}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    flex: 1,
    flexDirection: "column",
  },
  hiddenView: {
    display: "none",
    height: 0,
    width: 0,
    backgroundColor: "red",
  },
});
