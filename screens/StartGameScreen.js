import React from "react";
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
  input: { width: 50, textAlign: "center" }
});

const StartGameScreen = () => {
  return (
    <View style={{ flex: 1, padding: 10, alignItems: "center" }}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={2}
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
