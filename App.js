import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/Home";
import { StatusBar } from "expo-status-bar";

const backgroundImageUrl = `https://iphoneswallpapers.com/wp-content/uploads/2023/06/Cute-Ghost-iPhone-Wallpaper-HD.jpg`;

export default function App() {
  return (
    <ImageBackground
      source={{ uri: backgroundImageUrl }}
      style={styles.backgroundImage}
    >
      <SafeAreaProvider style={styles.container}>
        <StatusBar style="auto" />
        <Home />
      </SafeAreaProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "transparent",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "contain" depending on your preference
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
