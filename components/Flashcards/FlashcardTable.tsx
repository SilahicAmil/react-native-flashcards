import { Card, Text } from "@rneui/themed";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import flashCardData from "../../assets/dsa_flashcards_updated.json";

export default function FlashcardTable() {
  // Render each question
  const renderQuestion = ({ item }: any) => (
    <Card containerStyle={styles.card}>
      <Text style={styles.title}>{item.question}</Text>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={flashCardData.cards}
        renderItem={renderQuestion}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    // height: "100%",
  },
  contentContainer: {
    paddingBottom: 64,
  },
  card: {
    borderRadius: 10,
    padding: 10,
    margin: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  emptyMessage: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#888",
  },
});
