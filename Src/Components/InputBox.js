import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const InputBox = ({
  label = '',
  placeholder = '',
  value,
  onChangeText,
  customInputStyles,
  errorText = '',
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.InputBox, {...customInputStyles}]}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  InputBox: {
    width: '100%',
    height: 51,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    elevation: 2,
    paddingLeft: 20,
    fontSize: 14,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 700,
    fontFamily: 'Andika New Basic',
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingTop: 10,
  },
});
