import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../../Components/Button';
import {FONTS} from '../../../Utilities/Fonts';

const OverView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.MainTitle}>Booking Details:</Text>
      <View style={styles.mainContent}>
        <Text style={styles.mainText}>Free parking Spots : 10</Text>
        <Text style={styles.mainText}>Booked parking Spots : 5</Text>
      </View>
      <Text style={styles.MainTitle}>Current Booking:</Text>

      <View style={styles.content}>
        <Text style={styles.contentTitle}>Dale Harper</Text>

        <View style={styles.Timing}>
          <Text style={styles.duration}>25 Oct 2019 </Text>
          <Text style={styles.duration}>04.00 PM</Text>
          <Text style={styles.duration}>1 Hour</Text>
        </View>
        <Text style={styles.duration}>Vehicle Number : TN 03 4321</Text>

        <Button
          title="GO TO BOOKING"
          customStylesText={{color: '#F2CC0C'}}
          customStyles={{
            backgroundColor: '#FFFFFF',
            borderColor: '#F2CC0C',
            borderWidth: 1,
            marginVertical: 15,
          }}
        />
      </View>
      <Button title="pAUSE BOOKING" />
    </View>
  );
};

export default OverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    paddingVertical: 20,
  },
  content: {
    height: 175,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    paddingVertical: 10,
    paddingHorizontal: 8,
    elevation: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 2,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    marginBottom: 10,
  },
  contentTitle: {
    fontSize: 16,
    fontFamily: FONTS.Andika.bold,
    color: '#000000',
  },
  duration: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingRight: 29,
    fontFamily: FONTS.Andika.regular,
  },
  Timing: {
    flexDirection: 'row',
  },
  MainTitle: {
    color: '#000000',
    fontSize: 17,
    fontFamily: FONTS.Andika.bold,
  },
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainText: {
    fontSize: 13,
    paddingVertical: 10,
    fontFamily: FONTS.Andika.regular,
    color: '#000000',
  },
});
