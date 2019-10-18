import React from "react";
import { TextInput, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  inputStyle: { height: 30, borderBottomColor: "grey", borderBottomWidth: 2, marginVertical: 10 }
});

const Input = props => {
  return <TextInput {...props} style={{ ...props.style, ...styles.inputStyle }} />;
};

export default Input;
