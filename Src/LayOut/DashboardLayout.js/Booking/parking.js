import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Button from '../../../Components/Button';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chargings from './charging';

// export function MyTabs() {
//   const Tab = createMaterialTopTabNavigator();
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Parking" component={Parking} />
//       <Tab.Screen name="Chargings" component={Chargings} />
//     </Tab.Navigator>
//   );
// }

const bookingdata = [
  {
    found: '3 Booking Found',
    name: 'Phoenix Market City',
    time: '26  Nov 2019, 04:03 PM',
    dur: 'DUR : 44425 MIN',
    extend: 'Extended Booking',
    cancel: 'Cancel Booking',
    img: require('../../../Assets/Png/car.png'),
  },
  {
    found: '3 Booking Found',
    name: 'Phoenix Market City',
    time: '26  Nov 2019, 04:03 PM',
    dur: 'DUR : 44425 MIN',
    extend: 'Extended Booking',
    cancel: 'Cancel Booking',
    img: require('../../../Assets/Png/car.png'),
  },
  {
    found: '3 Booking Found',
    name: 'Phoenix Market City',
    time: '26  Nov 2019, 04:03 PM',
    dur: 'DUR : 44425 MIN',
    extend: 'Extended Booking',
    cancel: 'Cancel Booking',
    img: require('../../../Assets/Png/car.png'),
  },
];

const Parking = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {bookingdata.map((e, i) => {
          return (
            <View key={i} style={{paddingBottom: 6}}>
              <View style={styles.contents}>
                <View>
                  <Text style={styles.found}>{e.found}</Text>
                  <Text style={styles.name}>{e.name}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Text style={styles.time}>{e.time}</Text>
                      <Text style={styles.extend}>{e.extend}</Text>
                    </View>
                    <View>
                      <Text style={styles.dur}>{e.dur}</Text>
                      <Text style={styles.cancel}>{e.cancel}</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Image style={{width: 56, height: 45}} source={e.img} />
                </View>
              </View>
              <Button title="Navigate" />
            </View>
          );
        })}
      </View>
    </ScrollView>
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
    paddingVertical: 1,
  },
  name: {
    fontSize: 17,
    color: ' rgba(0, 0, 0, 0.9)',
    fontWeight: 700,
    paddingVertical: 1,
  },
  time: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.58)',
    paddingVertical: 1,
  },
  extend: {
    color: '#FEBF00',
    fontSize: 13,
    paddingVertical: 1,
  },
  dur: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 12,
    fontWeight: 400,
    paddingVertical: 1,
    paddingLeft: 7,
  },
  cancel: {
    color: '#000000',
    fontSize: 13,
    fontWeight: 700,
    paddingVertical: 1,
    paddingLeft: 7,
  },
});
