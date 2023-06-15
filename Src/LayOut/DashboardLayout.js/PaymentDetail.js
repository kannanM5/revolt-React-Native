import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DropDown from '../../Components/DropDown';

const paymentData = [
  {
    name: 'Starter Park',
    timing: '25 Oct 2019 4.00 pm',
    amount: 'Rs. 250',
  },
  {
    name: 'Starter Park',
    timing: '25 Oct 2019 4.00 pm',
    amount: 'Rs. 250',
  },
  {
    name: 'Starter Park',
    timing: '25 Oct 2019 4.00 pm',
    amount: 'Rs. 250',
  },
  {
    name: 'Starter Park',
    timing: '25 Oct 2019 4.00 pm',
    amount: 'Rs. 250',
  },
  {
    name: 'Starter Park',
    timing: '25 Oct 2019 4.00 pm',
    amount: 'Rs. 250',
  },
  {
    name: 'Starter Park',
    timing: '25 Oct 2019 4.00 pm',
    amount: 'Rs. 250',
  },
];

const PaymentDetail = () => {
  return (
    <View style={styles.container}>
      <DropDown DefaultName="Oct 25, 2019 " />
      {paymentData.map((e, i) => {
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
      })}
    </View>
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
    marginTop: 10,
  },
  lastItemBorder: {
    borderBottomWidth: 0,
  },
  nameText: {
    fontSize: 15,
    fontWeight: 700,
    color: 'rgba(0, 0, 0, 0.9)',
  },
  timingText: {
    fontSize: 14,
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  amount: {
    color: '#FEBF00',
    fontSize: 14,
    fontWeight: 700,
  },
});
