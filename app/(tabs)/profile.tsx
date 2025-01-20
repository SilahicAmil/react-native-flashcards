import { StyleSheet, Image, Platform } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native";
import { Avatar, Card } from "@rneui/themed";
import { ThemedView } from "@/components/ThemedView";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.container2}>
        <Avatar
          size="xlarge"
          rounded
          title="AS"
          onPress={() => console.log("Works!")}
          containerStyle={{
            backgroundColor: "gray",
            marginTop: 18,
          }}
        />
        <ThemedView>
          <ThemedText style={styles.text}>Amil Silahic</ThemedText>
        </ThemedView>
      </ThemedView>
      <Card>
        <ThemedText className="font-thin font-mono text-2xl bg-red-500">
          Something Here Maybe
        </ThemedText>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 12,
  },
  text: {
    marginTop: 12,
    paddingTop: 12,
    fontSize: 32,
    fontWeight: "bold",
  },
});
