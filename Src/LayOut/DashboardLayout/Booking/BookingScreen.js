import {StyleSheet, View} from 'react-native';
import React from 'react';
import SubHeader from '../../../Components/SubHeader';
import BookingTopStack from '../../../Stacks/BookingTopStack';

const BookingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SubHeader titleName="Booking" onPress={() => navigation.goBack()} />
      <BookingTopStack />
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
  },
});
