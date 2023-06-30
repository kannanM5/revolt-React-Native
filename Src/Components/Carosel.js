import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FONTS} from '../Utilities/Fonts';
import {COLORS} from '../Utilities/Colors';
import SVGIcons from './SVGIcon';

const Carosel = ({
  dataArray = [],
  customImageContainer,
  customImage,
  customTextStyle,
  onPress,
  isshowTitle = true,
}) => {
  return (
    <FlatList
      horizontal={true}
      // inverted={true}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      data={dataArray}
      renderItem={({item}) => (
        <View style={[styles.imageContainer, {...customImageContainer}]}>
          <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <Image
              style={[styles.parkingImg, {...customImage}]}
              source={item.img}
            />
          </TouchableOpacity>
          {isshowTitle ? (
            <Text style={[styles.text, {...customTextStyle}]}>
              {item.label}
            </Text>
          ) : null}
          {isshowTitle ? <Text style={styles.distance}>2.5 Km</Text> : null}
        </View>
      )}
    />
  );
};

export default Carosel;

const styles = StyleSheet.create({
  imageContainer: {
    marginRight: 10,
  },
  parkingImg: {
    width: 110,
    // width: '100%',
    height: 87,
    position: 'relative',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  distance: {
    fontSize: 8,
    position: 'absolute',
    right: 10,
    top: 8,
    backgroundColor: COLORS.buttonBgColor,
    paddingHorizontal: 2,
    borderRadius: 4,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: FONTS.Andika.bold,
    paddingVertical: 2,
    color: 'rgba(0, 0, 0, 1)',
  },
});
