import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

export default function TodoItem(props) {
  return (
    <TouchableNativeFeedback onPress={() => props.onDelete(props.item.id)}>
      <View style={styles.listItem}>
        <Text>{props.item.value}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
