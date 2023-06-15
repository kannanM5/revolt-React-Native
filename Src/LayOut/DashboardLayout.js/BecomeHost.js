import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';

const BecomeHost = () => {
  return (
    <View style={styles.container}>
      <InputBox
        label="Name"
        placeholder="Sundaram"
        customInputStyles={styles.box}
      />
      <InputBox label="Email ID" customInputStyles={styles.box} />
      <InputBox label="Phone Number" customInputStyles={styles.box} />
      <InputBox label="Password" customInputStyles={styles.box} />

      <InputBox label="Confirm Password" customInputStyles={styles.box} />
      <Button customStyles={{marginVertical: 35}} title="Sign up" />
    </View>
  );
};

export default BecomeHost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    paddingVertical: 20,
  },
  box: {
    elevation: 0,
    borderBottomWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    backgroundColor: '#F3F3F3',
    height: 40,
  },
});
