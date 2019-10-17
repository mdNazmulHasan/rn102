import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Card from "../components/Card.js";
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10
  }
});

const StartGameScreen = () => {
  return (
    <View style={{ flex: 1, padding: 10, alignItems: "center" }}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;
