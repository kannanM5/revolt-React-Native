import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {customerrating, starDataArray} from '../SharedComponents/Arrays';
import {FONTS} from '../Utilities/Fonts';
import {COLORS} from '../Utilities/Colors';
import {color} from 'react-native-reanimated';

const CustomerRatingComponent = ({name}) => {
  return (
    <View>
      {customerrating.map(e => {
        return (
          <View style={styles.container} key={e.id}>
            <View style={{paddingVertical: 10}}>
              <Image source={e.img} style={{paddingTop: 15}} />
            </View>

            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.black,
                  fontFamily: FONTS.Andika.bold,
                }}>
                {e.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 2,
                  alignItems: 'center',
                }}>
                <View style={styles.rating}>
                  {starDataArray.map(e => {
                    return (
                      <Image
                        source={e.pressImg}
                        style={styles.star}
                        key={e.id}
                      />
                    );
                  })}
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Text
                    style={{
                      fontSize: 11,
                      color: COLORS.black,
                      marginRight: 10,
                      fontFamily: FONTS.Andika.bold,
                      marginTop: -4,
                    }}>
                    4.0
                  </Text>
                  <Image source={require('../Assets/Png/heart.png')} />
                </View>
              </View>

              <Text style={styles.content}>{e.content}</Text>
              <View style={{flexDirection: 'row', paddingTop: 3}}>
                <Text
                  style={{
                    fontSize: 10,
                    color: COLORS.red,
                    paddingRight: 10,
                    fontFamily: FONTS.Andika.bold,
                  }}>
                  {e.likes}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: FONTS.Andika.regular,
                    color: 'rgba(0, 0, 0, 0.35)',
                  }}>
                  Reply
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CustomerRatingComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  content: {
    fontSize: 10,
    color: COLORS.transparentDimColor,
    width: 250,
    lineHeight: 16,
    fontFamily: FONTS.Andika.regular,
  },
  rating: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginRight: 5,
  },
  star: {
    marginRight: 2,
    width: 10,
    height: 10,
  },
});
