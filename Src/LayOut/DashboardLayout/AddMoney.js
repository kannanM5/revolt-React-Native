import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import SubHeader from '../../Components/SubHeader';

const AddMoney = () => {
  const navigation = useNavigation();
  return (
    <>
      <SubHeader titleName="Add Money" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Image
          style={styles.walletImage}
          source={require('../../Assets/Png/addMoney.png')}
        />
        <View style={styles.containBox}>
          <InputBox placeholder="Enter Amount" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Submit" customStyles={styles.button} />
        </View>
      </View>
    </>
  );
};

export default AddMoney;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 40,
  },
  walletImage: {
    width: 187,
    height: 149,
  },
  containBox: {
    width: '100%',
    marginTop: 15,
    marginBottom: 5,
  },
  button: {
    borderRadius: 50,
  },
  buttonContainer: {
    width: 157,
    marginBottom: 10,
  },
});
