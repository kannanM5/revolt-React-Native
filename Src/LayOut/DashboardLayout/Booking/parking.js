import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import Button from '../../../Components/Button';
import {FONTS} from '../../../Utilities/Fonts';
import {items} from '../../../SharedComponents/Arrays';

const bookingdata = [
  {
    found: '3 Booking Found',
    name: 'Phoenix Market City',
    time: '26  Nov 2019, 04:03 PM',
    dur: 'DUR : 44425 MIN',
    extend: 'Extended Booking',
    cancel: 'Cancel Booking',
    img: require('../../../Assets/Png/car.png'),
    id: 1,
  },
  {
    found: '3 Booking Found',
    name: 'Phoenix Market City',
    time: '26  Nov 2019, 04:03 PM',
    dur: 'DUR : 44425 MIN',
    extend: 'Extended Booking',
    cancel: 'Cancel Booking',
    img: require('../../../Assets/Png/car.png'),
    id: 2,
  },
  {
    found: '3 Booking Found',
    name: 'Phoenix Market City',
    time: '26  Nov 2019, 04:03 PM',
    dur: 'DUR : 44425 MIN',
    extend: 'Extended Booking',
    cancel: 'Cancel Booking',
    img: require('../../../Assets/Png/car.png'),
    id: 3,
  },
];

const Parking = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={bookingdata}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={{paddingBottom: 5}}>
            <View style={styles.contents}>
              <View>
                <Text style={styles.found}>{item.found}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text style={styles.time}>{item.time}</Text>
                    <Text style={styles.extend}>{item.extend}</Text>
                  </View>
                  <View>
                    <Text style={styles.dur}>{item.dur}</Text>
                    <Text style={styles.cancel}>{item.cancel}</Text>
                  </View>
                </View>
              </View>
              <View>
                <Image style={{width: 56, height: 45}} source={item.img} />
              </View>
            </View>
            <Button title="Navigate" />
          </View>
        )}
      />
    </View>
  );
};

export default Parking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    paddingVertical: 20,
  },
  contents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  found: {
    color: '#FC3A3A',
    fontSize: 14,
    fontFamily: FONTS.Andika.regular,
  },
  name: {
    fontSize: 17,
    color: ' rgba(0, 0, 0, 0.9)',
    fontFamily: FONTS.Andika.bold,
  },
  time: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.58)',
    fontFamily: FONTS.Andika.regular,
  },
  extend: {
    color: '#FEBF00',
    fontSize: 13,
    fontFamily: FONTS.Andika.bold,
  },
  dur: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 12,
    fontFamily: FONTS.Andika.bold,
    paddingLeft: 7,
  },
  cancel: {
    color: '#000000',
    fontSize: 13,
    fontWeight: 700,
    paddingLeft: 7,
    fontFamily: FONTS.Andika.bold,
  },
});
