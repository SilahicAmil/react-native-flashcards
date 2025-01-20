import { ScrollView, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Card, Text } from "@rneui/themed";

export default function FlashcardTable() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        {Array.from(Array(50), (e, i) => {
          return (
            <Card key={i}>
              <Text>123</Text>
            </Card>
          );
        })}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: "100%",
  },
  scroll: {
    marginTop: 8,
    height: 24,
  },
});
