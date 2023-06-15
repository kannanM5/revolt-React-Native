import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

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

const BookParking = () => {
  return (
    <View style={styles.container}>
      {details.map((e, i) => {
        return (
          <View key={i} style={styles.content}>
            <View>
              <Image source={e.img} />
            </View>
            <View>
              <Text style={styles.name}>{e.name}</Text>
              <Text style={styles.dur}>{e.dur}</Text>
            </View>
            <View>
              <View style={styles.textContent}>
                <Text style={styles.amount}>{e.amount}</Text>
              </View>

              <Text style={styles.time}>{e.time}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default BookParking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    paddingVertical: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    elevation: 2,
    marginBottom: 15,
  },
  name: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 700,
    paddingBottom: 5,
  },
  dur: {
    fontSize: 11,
    color: 'rgba(0, 0, 0, 0.58)',
    fontWeight: 400,
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
    fontWeight: 700,
    marginBottom: 5,
    alignSelf: 'center',
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.8)',
    fontWeight: 400,
  },
});
