import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import InputBox from '../../Components/InputBox';
import {FONTS} from '../../Utilities/Fonts';

const ResetPassword = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titleName}>Reset Password?</Text>
        <Text style={styles.titleContent}>
          Your new password must be different from previous used password
        </Text>
        <Image
          style={styles.forgotImage}
          source={require('../../Assets/Png/Group223.png')}
        />
        <View style={styles.containBox}>
          <InputBox
            label="New Password"
            placeholder="Enter your New Password"
            setPassword={true}
          />
        </View>
        <View style={styles.containBox}>
          <InputBox
            label="Confirm Password"
            placeholder="Enter your New Password"
            setPassword={true}
          />
        </View>
        <Button
          title="Reset Password"
          customStyles={{
            height: 45,
            width: '100%',
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 50,
  },
  titleName: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: FONTS.Andika.bold,
  },
  titleContent: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    width: 225,
    lineHeight: 19,
    fontFamily: FONTS.Andika.regular,
  },
  forgotImage: {
    width: 102,
    height: 125,
    margin: 25,
  },
  containBox: {
    width: '100%',
    marginBottom: 8,
  },
});
