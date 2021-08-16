import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Card from "../components/Card";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onRestart,
}) {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.line}>The Game is Over</Text>
        <Text style={styles.line}>Number of rounds: {roundsNumber}</Text>
        <Text style={styles.line}>Number was: {userNumber}</Text>
        <Button
          title="NEW GAME"
          onPress={() => {
            onRestart();
          }}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: { backgroundColor: "#799" },
  line: { marginVertical: 5, fontWeight: "700" },
});
