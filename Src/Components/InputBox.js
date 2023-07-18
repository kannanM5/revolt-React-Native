import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
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
  isShownLabel = true,
  errors,
  setPassword,
  keyboardType,
  placeholderTextColor,
  maxLength,
  ref,
  editable,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View>
      {isShownLabel && label ? (
        <Text style={[styles.label, {...customLabelStyles}]}>{label}</Text>
      ) : null}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={[styles.placeholder, {...placeholderTextColor}]}
        value={value}
        onChangeText={onChangeText}
        style={[styles.InputBox, {...customInputStyles}]}
        secureTextEntry={setPassword ? !showPassword : false}
        keyboardType={keyboardType}
        maxLength={maxLength}
        ref={ref}
        editable={editable}
      />
      {setPassword ? (
        <TouchableOpacity onPress={handlePassword} style={styles.eyeBtn}>
          <Image
            style={styles.eye}
            source={
              showPassword
                ? require('../Assets/Png/eye.png')
                : require('../Assets/Png/eye1.png')
            }
          />
        </TouchableOpacity>
      ) : null}

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
    position: 'relative',
  },
  placeholder: {
    color: COLORS.placeHolderColor,
  },
  label: {
    fontSize: 15,
    color: COLORS.labelColor,
    alignItems: 'flex-start',
    paddingBottom: 3,
    paddingTop: 5,
    fontFamily: FONTS.Andika.bold,
  },
  error: {
    color: COLORS.red,
    fontSize: 13,
    alignSelf: 'flex-start',
    fontFamily: FONTS.Andika.regular,
    opacity: 0.7,
    marginBottom: -10,
  },
  eye: {
    width: 25,
    height: 16,
  },
  eyeBtn: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
});
