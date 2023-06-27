import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {starDataArray} from '../../../SharedComponents/Arrays';
import CustomerRatingComponent from '../../../Components/CustomerRatingComponent';
import InputBox from '../../../Components/InputBox';
import {FONTS} from '../../../Utilities/Fonts';

const ParkingReviews = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: FONTS.Andika.bold,
              fontSize: 35,
              color: 'black',
              marginRight: 10,
            }}>
            4.7
          </Text>
          <View style={{alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 23,
                fontFamily: FONTS.Andika.regular,
              }}>
              From 25 People
            </Text>

            <View style={styles.rating}>
              {starDataArray.map((e, i) => {
                return (
                  <View key={i}>
                    <Image
                      source={e.pressed ? e.img : e.pressImg}
                      style={styles.star}
                      key={i}
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

export default ParkingReviews;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    paddingVertical: 10,
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
    top: 40,
  },
});
