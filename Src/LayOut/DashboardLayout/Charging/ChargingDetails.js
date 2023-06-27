import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Carosel from '../../../Components/Carosel';
import {chargingImages, starDataArray} from '../../../SharedComponents/Arrays';
import {FONTS} from '../../../Utilities/Fonts';

const ChargingDetails = () => {
  return (
    <View style={styles.container}>
      <Carosel
        dataArray={[...chargingImages]}
        customImageContainer={{marginRight: 12}}
        customImage={{width: 283, height: 140}}
        isshowTitle={false}
      />
      <Text style={styles.shopTitle}>Cafe Coffee Day</Text>
      <Text style={styles.address}>
        142, Velachery Main Rd, Indira Gandhi Nagar, Velachery, Chennai,Tamil
        Nadu 600042
      </Text>
      <View style={{flexDirection: 'row', paddingVertical: 8}}>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 14,
            color: 'black',
            marginRight: 10,
          }}>
          4.0
        </Text>
        <View style={styles.rating}>
          {starDataArray.map((e, i) => {
            return (
              <Image
                source={e.pressed ? e.pressImg : e.img}
                style={styles.star}
                key={i}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.section}>
        <View style={[styles.section, {marginRight: 15}]}>
          <Image
            style={{marginRight: 10}}
            source={require('../../../Assets/Png/location.png')}
          />
          <Text style={styles.text}>1.5 km for you</Text>
        </View>
        <View style={styles.section}>
          <Image
            style={{marginRight: 10}}
            source={require('../../../Assets/Png/socket.png')}
          />
          <Text style={styles.text}>2 Charging sockets</Text>
        </View>
      </View>
    </View>
  );
};

export default ChargingDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 10,
  },
  shopTitle: {
    fontSize: 24,
    color: 'black',
    paddingTop: 15,
    paddingBottom: 6,
    fontFamily: FONTS.Andika.bold,
  },
  address: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.65)',
    fontFamily: FONTS.Andika.regular,
    lineHeight: 20,
  },
  rating: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  star: {
    marginRight: 3,
    width: 12,
    height: 12,
  },
  section: {
    flexDirection: 'row',
  },
});
