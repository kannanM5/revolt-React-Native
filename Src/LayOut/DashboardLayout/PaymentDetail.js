import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import DropDown from '../../Components/DropDown';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';

const paymentData = [
  {
    name: 'Starter Park',
    timing: '25 Oct 2019 4.00 pm',
    amount: 'Rs. 250',
    id: 1,
  },
  {
    name: 'Starter Park',
    timing: '25 Oct 2019 4.00 pm',
    amount: 'Rs. 250',
    id: 2,
  },
  {
    name: 'Starter Park',
    timing: '25 Oct 2019 4.00 pm',
    amount: 'Rs. 250',
    id: 3,
  },
  {
    name: 'Starter Park',
    timing: '25 Oct 2019 4.00 pm',
    amount: 'Rs. 250',
    id: 4,
  },
  {
    name: 'Starter Park',
    timing: '25 Oct 2019 4.00 pm',
    amount: 'Rs. 250',
    id: 5,
  },
  {
    name: 'Starter Park',
    timing: '25 Oct 2019 4.00 pm',
    amount: 'Rs. 250',
    id: 6,
  },
];

const PaymentDetail = ({navigation}) => {
  return (
    <>
      <SubHeader
        titleName="Payment Details"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <DropDown DefaultName="Oct 25, 2019 " />
        <FlatList
          data={paymentData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={[styles.contents]}>
              <View>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.timingText}>{item.timing}</Text>
              </View>
              <View>
                <Text style={styles.amount}>{item.amount}</Text>
              </View>
            </View>
          )}
        />
        {/* {paymentData.map((e, i) => {
          const lastitem = i === paymentData.length - 1;

          return (
            <View
              key={i}
              style={[styles.contents, lastitem && styles.lastItemBorder]}>
              <View>
                <Text style={styles.nameText}>{e.name}</Text>
                <Text style={styles.timingText}>{e.timing}</Text>
              </View>
              <View>
                <Text style={styles.amount}>{e.amount}</Text>
              </View>
            </View>
          );
        })} */}
      </View>
    </>
  );
};

export default PaymentDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    paddingVertical: 20,
  },
  contents: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 2,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  lastItemBorder: {
    borderBottomWidth: 0,
  },
  nameText: {
    fontSize: 15,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 0.9)',
  },
  timingText: {
    fontSize: 14,
    fontFamily: FONTS.Andika.regular,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  amount: {
    color: '#FEBF00',
    fontSize: 14,
    fontFamily: FONTS.Andika.bold,
  },
});
