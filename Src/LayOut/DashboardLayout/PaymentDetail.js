import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import DropDown from '../../Components/DropDown';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';
import {paymentData} from '../../SharedComponents/Arrays';

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
          renderItem={({item, index}) => (
            <View
              style={[
                styles.contents,
                index === paymentData.length - 1 && styles.lastItemBorder,
              ]}>
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
      </View>
    </>
  );
};

export default PaymentDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
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
