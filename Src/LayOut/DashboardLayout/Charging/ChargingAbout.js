import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Button from '../../../Components/Button';
import DateTimePicker from '../../../Components/DateTimePicker';
import MapView from 'react-native-maps';
import {FONTS} from '../../../Utilities/Fonts';

export const ChargingAbout = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 23,
            color: 'rgba(0, 0, 0, 0.6)',
            fontFamily: FONTS.Andika.regular,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh a,
          mattis libero nec etiam. Nisl odio facilisi laoreet scelerisque.
        </Text>
        <View style={styles.imgContainer}>
          <Image source={require('../../../Assets/Png/toilet.png')} />
          <Image source={require('../../../Assets/Png/wheelchair.png')} />
          <Image source={require('../../../Assets/Png/shop.png')} />
          <Image source={require('../../../Assets/Png/apartment.png')} />
          <Image source={require('../../../Assets/Png/cafe.png')} />
        </View>
        <Text style={styles.subTitle}> Timmings</Text>

        <View style={styles.datePicker}>
          <DateTimePicker
            label="Start Time"
            customStyles={styles.customDateStyles}
          />
          <Text>14hrs</Text>
          <DateTimePicker
            label="End Time"
            customStyles={styles.customDateStyles}
          />
        </View>
        <Text style={styles.subTitle}> Charger Details</Text>

        <View style={styles.buttonGroupContainer}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={[styles.button]}>
              <View style={styles.btnContent}>
                <View style={[styles.imgBox]}>
                  <Image
                    style={styles.img}
                    source={require('../../../Assets/Png/american.png')}
                  />
                </View>

                <Text style={styles.BtnText}>AC - AMERICAN</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button]}>
              <View style={styles.btnContent}>
                <View style={[styles.imgBox]}>
                  <Image
                    style={styles.img}
                    source={require('../../../Assets/Png/uks.png')}
                  />
                </View>

                <Text style={styles.BtnText}>AC - EUROPEAN</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Button title="Book Parking Spot" customStyles={{marginVertical: 1}} />
        <View style={{flex: 1, marginVertical: 15}}>
          <MapView
            initialRegion={{
              latitude: 28.701642445689195,
              longitude: 77.22316070481907,
              latitudeDelta: 1.09,
              longitudeDelta: 1.04,
            }}
            style={{width: '100%', height: 180}}></MapView>
        </View>
      </View>
    </ScrollView>
  );
};

export default ChargingAbout;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 7,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: 'black',
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 72,
    backgroundColor: 'white',
    elevation: 2,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.03)',
  },
  customDateStyles: {
    elevation: 0,
    borderRadius: 0,
  },
  buttonGroupContainer: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    elevation: 10,
    width: 140,
  },
  activeBtn: {
    backgroundColor: '#FCDC0C',
  },

  imgBox: {
    width: 42,
    height: 36,
    backgroundColor: '#FCDC0C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeImg: {
    backgroundColor: '#F9F9F9',
  },
  img: {
    paddingLeft: 10,
  },
  BtnText: {
    fontSize: 9,
    fontFamily: FONTS.Andika.bold,
    paddingLeft: 7,
  },
  btnContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
