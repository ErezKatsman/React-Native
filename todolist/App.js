import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const inputHandler = (text) => {
    console.log(text);
    setInput(text);
  };

  const addHnadler = () => {
    setTodos((prevTodos) => [...prevTodos, input]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        placeholder="Enter The Goal"
        onChangeText={inputHandler}
      />
      <Button title="Add Goal" onPress={addHnadler} />
      {todos.map((todo, i) => (
        <Text key={i} t>
          {todo}
        </Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
