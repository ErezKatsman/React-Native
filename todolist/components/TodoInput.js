import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Modal } from "react-native";

export default function TodoInput(props) {
  const [enteredTodo, setEnteredTodo] = useState("");

  const todoInputHandler = (text) => {
    // console.log(text);
    setEnteredTodo(text);
  };

  return (
    <Modal animationType="slide" visible={props.isVisible}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={enteredTodo}
          placeholder="Enter TODO"
          onChangeText={todoInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.btn}>
            <Button
              color="red"
              title="CANCEL"
              onPress={() => {
                props.onChangeVisible();
              }}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="Add"
              onPress={() => {
                props.onAddTodo(enteredTodo);
                setEnteredTodo("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  btn: { width: "40%" },
});
