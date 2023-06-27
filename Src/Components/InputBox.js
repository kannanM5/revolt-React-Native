import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {FONTS} from '../Utilities/Fonts';
import {COLORS} from '../Utilities/Colors';

const InputBox = ({
  label = '',
  placeholder = '',
  value,
  onChangeText,
  customInputStyles,
  customLabelStyles,
  errorText = '',
  secureTextEntry,
  isShownLabel = true,
  errors,
}) => {
  return (
    <View style={styles.container}>
      {isShownLabel && label ? (
        <Text style={[styles.label, {...customLabelStyles}]}>{label}</Text>
      ) : null}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.InputBox, {...customInputStyles}]}
        secureTextEntry={secureTextEntry}
      />
      {errors ? <Text style={styles.error}>{errorText}</Text> : null}
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
    borderColor: COLORS.borderColor,
    elevation: 2,
    paddingLeft: 20,
    fontSize: 14,
    fontFamily: FONTS.Andika.regular,
    backgroundColor: COLORS.white,
  },
  label: {
    fontSize: 15,
    color: COLORS.labelColor,
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingTop: 10,
    fontFamily: FONTS.Andika.bold,
  },
  error: {
    color: COLORS.red,
    fontSize: 14,
    margin: 0,
    alignSelf: 'flex-start',
    paddingTop: 3,
  },
});
