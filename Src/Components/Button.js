import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({
  title = '',
  onPressButton,
  customStyles,
  customStylesText,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      style={[styles.button, {...customStyles}]}>
      <Text style={[styles.BtnTextColor, {...customStylesText}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FCDC0C',
    height: 50,
    borderRadius: 10,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  BtnTextColor: {
    color: 'rgba(0, 0, 0, 0.8)',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 700,
  },
});
