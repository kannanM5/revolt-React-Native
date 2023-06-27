import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {FONTS} from '../../../Utilities/Fonts';

const details = [
  {
    img: require('../../../Assets/Png/car1.png'),
    name: 'Phoenix Market City',
    dur: '26  Nov 2019, 04:03 PM',
    amount: 'Rs: 100',
    time: 'DUR : 44425 MIN',
  },
  {
    img: require('../../../Assets/Png/car1.png'),
    name: 'Phoenix Market City',
    dur: '26  Nov 2019, 04:03 PM',
    amount: 'Rs: Null',
    time: 'DUR : 44425 MIN',
  },
  {
    img: require('../../../Assets/Png/car1.png'),
    name: 'Phoenix Market City',
    dur: '26  Nov 2019, 04:03 PM',
    amount: 'Rs: Null',
    time: 'DUR : 44425 MIN',
  },
  {
    img: require('../../../Assets/Png/car1.png'),
    name: 'Phoenix Market City',
    dur: '26  Nov 2019, 04:03 PM',
    amount: 'Rs: Null',
    time: 'DUR : 44425 MIN',
  },
  {
    img: require('../../../Assets/Png/car1.png'),
    name: 'Phoenix Market City',
    dur: '26  Nov 2019, 04:03 PM',
    amount: 'Rs: Null',
    time: 'DUR : 44425 MIN',
  },
  {
    img: require('../../../Assets/Png/car1.png'),
    name: 'Phoenix Market City',
    dur: '26  Nov 2019, 04:03 PM',
    amount: 'Rs: Null',
    time: 'DUR : 44425 MIN',
  },
  {
    img: require('../../../Assets/Png/car1.png'),
    name: 'Phoenix Market City',
    dur: '26  Nov 2019, 04:03 PM',
    amount: 'Rs: Null',
    time: 'DUR : 44425 MIN',
  },
];

const BookRestRoom = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        data={details}
        renderItem={({item}) => (
          <View style={styles.content}>
            <Image source={item.img} />
            <View style={{marginLeft: 7}}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.dur}>{item.dur}</Text>
            </View>
            <View>
              <View style={styles.textContent}>
                <Text style={styles.amount}>{item.amount}</Text>
              </View>

              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default BookRestRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    paddingVertical: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 0,
    borderLeftColor: 'rgba(0,0,0,0.1)',
    borderRightColor: 'rgba(0,0,0,0.1)',
    borderBottomColor: 'rgba(0,0,0,0.2)',
    elevation: 4,
    marginBottom: 10,
    backgroundColor: '#FFFF',
  },
  name: {
    fontSize: 14,
    color: '#000000',
    fontFamily: FONTS.Andika.bold,
    paddingBottom: 5,
  },
  dur: {
    fontSize: 11,
    color: 'rgba(0, 0, 0, 0.58)',
    fontFamily: FONTS.Andika.regular,
  },
  textContent: {
    backgroundColor: '#F2CC0C',
    borderRadius: 5,
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    textAlign: 'center',
    marginBottom: 3,
  },
  amount: {
    fontSize: 11,
    color: '#FFFFFF',
    fontFamily: FONTS.Andika.bold,
    marginBottom: 5,
    alignSelf: 'center',
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.8)',
    fontFamily: FONTS.Andika.regular,
  },
});
