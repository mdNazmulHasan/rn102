import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Card from "../components/Card.js";
import color from "../constants/color";
import Input from "../components/Input";
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
    alignItems: "center"
  },
  button: { width: 100 },
  inputs: { width: 50, textAlign: "center" }
});

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const numberInputHandler = number => {
    // set only numbered value
    setEnteredValue(number.replace(/[^0-9]/g, ""));
  };
  return (
    <View style={{ flex: 1, padding: 10, alignItems: "center" }}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          value={enteredValue}
          style={styles.inputs}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={color.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={color.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;
