import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const addTodoHnadler = (enteredTodo) => {
    if (!enteredTodo) {
      alert("You should enter Todo");
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), value: enteredTodo },
    ]);
    setIsVisible(false);
  };

  const deleteTodoHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const makeVisble = () => {
    setIsVisible((prevState) => !prevState);
  };

  const changeVisibleHandler = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <View style={styles.screen}>
      <Button onPress={makeVisble} title="Add Todo" />
      <TodoInput
        isVisible={isVisible}
        onChangeVisible={changeVisibleHandler}
        onAddTodo={addTodoHnadler}
      />
      <FlatList
        data={todos}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <TodoItem onDelete={deleteTodoHandler} item={itemData.item} />
        )}
      ></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
});
