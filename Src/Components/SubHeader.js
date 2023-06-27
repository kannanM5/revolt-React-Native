import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../Utilities/Colors';
import {FONTS} from '../Utilities/Fonts';

const SubHeader = ({titleName = '', onPress}) => {
  return (
    <View style={styles.subTitle}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.image}
          source={require('../Assets/Png/goback1.png')}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{titleName}</Text>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  subTitle: {
    width: '100%',
    height: 67,
    backgroundColor: COLORS.white,
    elevation: 1,
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 10,
    height: 17,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.Andika.bold,
    color: COLORS.black,
    paddingHorizontal: 25,
  },
});