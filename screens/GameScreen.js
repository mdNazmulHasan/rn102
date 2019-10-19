import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card.js";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
});

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNumber;
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  return (
    <View style={styles.screen}>
      <Text>Opponents Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="GREATER" onPress={() => {}} />
      </Card>
    </View>
  );
};

export default GameScreen;
