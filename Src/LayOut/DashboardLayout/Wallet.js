import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from '../../Components/Button';
import {walletDetails} from '../../SharedComponents/Arrays';
import {useNavigation, useRoute} from '@react-navigation/native';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {walletbalance} from '../../Services/Services';
import {useSelector} from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';

const Wallet = () => {
  const navigation = useNavigation();
  const myToken = useSelector(state => state.auth.token);
  // const route = useRoute();
  // const amount = route.params.amount;
  const [balance, setBalance] = useState();

  useEffect(() => {
    const balanceAmount = async () => {
      try {
        EncryptedStorage.setItem('balance', balance);
      } catch {
        console.log('error');
      }
    };
    balanceAmount();
  });

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('token', myToken);
    walletbalance(formData)
      .then(res => {
        if (res.data.status === 1) {
          console.log('wallet balance', res.data);
          setBalance(res.data.balance);

          navigation.navigate('AddMoney');
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <>
      <SubHeader titleName="Wallet" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Image
          style={styles.walletImage}
          source={require('../../Assets/Png/wallet1.png')}
        />
        <Text style={styles.titleName}>Wallet Balance </Text>
        <Text style={styles.amount}>₹ {balance} </Text>
        <View style={styles.buttonContainer}>
          <Button title="+ Add Money" onPressButton={handleSubmit} />
        </View>
        <Text style={styles.subTitle}>History</Text>
        <FlatList
          data={walletDetails}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.paymentDetails}>
              <View>
                <Text style={styles.amountDetails}>Rs. {item.amount}</Text>
                <Text style={styles.timing}>{item.time}</Text>
              </View>
              <Text style={styles.isSend}>{item.isSend}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 20,
    marginBottom: 70,
  },
  walletImage: {
    width: 195,
    height: 126,
  },
  titleName: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingTop: 5,
    fontFamily: FONTS.Andika.regular,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
  amount: {
    fontFamily: FONTS.Andika.bold,
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.9)',
  },
  subTitle: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 0.8)',
    marginTop: -10,
  },
  paymentDetails: {
    width: '100%',
    height: 75,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 0,
    borderLeftColor: 'rgba(0, 0, 0, 0.1)',
    borderRightColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 1,
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  amountDetails: {
    fontFamily: FONTS.Andika.regular,
    color: 'black',
  },
  timing: {
    fontSize: 11,
    color: 'rgba(0, 0, 0, 0.58)',
    fontFamily: FONTS.Andika.regular,
  },
  isSend: {
    color: '#FEBF00',
    fontSize: 12.5,
  },
});
