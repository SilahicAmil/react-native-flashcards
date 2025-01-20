import { Image, StyleSheet, Platform, SafeAreaView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import FlashcardTable from "@/components/Flashcards/FlashcardTable";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.stepContainer}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>Flashcards</ThemedText>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>&#43;</Text>
        </TouchableOpacity>
      </View>
      <FlashcardTable />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Optional background color for the screen
  },
  header: {
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-between", // Space out title and button
    alignItems: "center", // Center items vertically
    padding: 16, // Add some padding
    backgroundColor: "#ffffff", // Optional: Header background color
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: "10%",
  },
  title: {
    fontSize: 26, // Larger font size for title
    fontWeight: "bold", // Make title bold
  },
  plusButton: {
    padding: 16, // Increase touchable area
    backgroundColor: "#007AFF", // Blue button background
    borderRadius: 8, // Rounded corners
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  plusText: {
    fontSize: 16,
    color: "#ffffff", // White text for the button
    fontWeight: "bold",
  },
});
