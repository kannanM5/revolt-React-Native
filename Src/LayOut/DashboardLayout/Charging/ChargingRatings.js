import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import CustomerRatingComponent from '../../../Components/CustomerRatingComponent';
import {starDataArray} from '../../../SharedComponents/Arrays';
import InputBox from '../../../Components/InputBox';
import {FONTS} from '../../../Utilities/Fonts';

const ChargingRatings = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containers}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>4.7</Text>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.peopleText}>From 25 People</Text>

            <View style={styles.rating}>
              {starDataArray.map((e, i) => {
                return (
                  <View key={i}>
                    <Image
                      source={e.pressed ? e.img : e.pressImg}
                      style={styles.star}
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <CustomerRatingComponent />

        <View>
          <InputBox
            placeholder="Write a Comment"
            customInputStyles={{position: 'relative', marginVertical: 20}}
          />
          <Image
            style={styles.arrow}
            source={require('../../../Assets/Png/arrow.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ChargingRatings;

const styles = StyleSheet.create({
  containers: {
    marginHorizontal: 25,
    marginVertical: 10,
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
  arrow: {
    position: 'absolute',
    right: 20,
    top: 38,
  },
  text: {
    fontFamily: FONTS.Andika.bold,
    fontSize: 35,
    color: 'black',
    marginRight: 10,
  },
  peopleText: {
    fontSize: 14,
    lineHeight: 23,
    fontFamily: FONTS.Andika.regular,
  },
});
