import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS} from '../Utilities/Fonts';
import {COLORS} from '../Utilities/Colors';

const Button = ({
  title = '',
  onPressButton,
  customStyles,
  customStylesText,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      activeOpacity={0.5}
      style={[styles.button, {...customStyles}]}>
      <Text style={[styles.BtnTextColor, {...customStylesText}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.buttonBgColor,
    height: 50,
    borderRadius: 10,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  BtnTextColor: {
    color: COLORS.buttonTextColor,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: FONTS.Andika.bold,
  },
});
