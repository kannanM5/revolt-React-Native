import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import {walletDetails} from '../../SharedComponents/Arrays';
import {useNavigation} from '@react-navigation/native';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';

const Wallet = () => {
  const navigation = useNavigation();
  return (
    <>
      <SubHeader titleName="Wallet" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Image
          style={styles.walletImage}
          source={require('../../Assets/Png/wallet1.png')}
        />
        <Text style={styles.titleName}>Wallet Balance </Text>
        <Text style={styles.amount}>₹ 1000.00 </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="+ Add Money"
            onPressButton={() => navigation.navigate('AddMoney')}
          />
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
    marginBottom: 65,
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
    width: 305,
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
