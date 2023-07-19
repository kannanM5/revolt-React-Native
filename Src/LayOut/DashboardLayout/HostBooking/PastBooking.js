import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../../Components/Button';
import {FONTS} from '../../../Utilities/Fonts';

const Bookings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Dale Harper</Text>

        <View style={styles.Timing}>
          <Text style={styles.duration}>25 Oct 2019 </Text>
          <Text style={styles.duration}>04.00 PM</Text>
          <Text style={styles.duration}>1 Hour</Text>
        </View>
        <Text style={styles.duration}>Vehicle Number : TN 03 4321</Text>

        <Button
          title="APPROVE BOOKING"
          customStylesText={{color: '#5AA745'}}
          customStyles={{
            backgroundColor: '#FFFFFF',
            borderColor: '#F2CC0C',
            borderWidth: 1,
            marginVertical: 15,
          }}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.contentTitle}>Dale Harper</Text>

        <View style={styles.Timing}>
          <Text style={styles.duration}>25 Oct 2019 </Text>
          <Text style={styles.duration}>04.00 PM</Text>
          <Text style={styles.duration}>1 Hour</Text>
        </View>
        <Text style={styles.duration}>Vehicle Number : TN 03 4321</Text>

        <Button
          title="APPROVE BOOKING"
          customStylesText={{color: '#5AA745'}}
          customStyles={{
            backgroundColor: '#FFFFFF',
            borderColor: '#F2CC0C',
            borderWidth: 1,
            marginVertical: 15,
          }}
        />
      </View>
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
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
    color: '#000000',
    paddingBottom: 5,
    fontFamily: FONTS.Andika.bold,
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
    fontWeight: 700,
  },
});
