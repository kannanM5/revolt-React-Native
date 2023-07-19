import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import SubHeader from '../../Components/SubHeader';

const BecomeHost = ({navigation}) => {
  return (
    <>
      <SubHeader titleName="Become Host" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <InputBox
          label="Name"
          placeholder="Sundaram"
          customInputStyles={styles.box}
          customLabelStyles={styles.label}
        />
        <InputBox
          label="Email ID"
          customInputStyles={styles.box}
          customLabelStyles={styles.label}
        />
        <InputBox
          label="Phone Number"
          customInputStyles={styles.box}
          customLabelStyles={styles.label}
        />
        <InputBox
          label="Password"
          customInputStyles={styles.box}
          customLabelStyles={styles.label}
        />

        <InputBox
          label="Confirm Password"
          customInputStyles={styles.box}
          customLabelStyles={styles.label}
        />
        <Button customStyles={{marginVertical: 25}} title="Sign up" />
      </View>
    </>
  );
};

export default BecomeHost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  box: {
    borderBottomWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    backgroundColor: '#F3F3F3',
    height: 40,
    elevation: 0,
  },
  label: {
    paddingTop: 5,
    paddingBottom: 1,
  },
});
