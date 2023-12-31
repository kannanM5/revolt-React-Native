import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../Utilities/Colors';
import {FONTS} from '../Utilities/Fonts';
import Button from './Button';

const SubHeader = ({
  titleName = '',
  onPress,
  customStyles,
  show,
  handlepress,
}) => {
  return (
    <View style={[styles.subTitle, {...customStyles}]}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <Image
          style={styles.image}
          source={require('../Assets/Png/goback1.png')}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{titleName}</Text>

      {show ? (
        <View style={{alignSelf: 'center', position: 'absolute', right: 20}}>
          <Button
            title="+Add"
            customStyles={{
              height: 40,
              width: 60,
              aligSelf: 'flex-end',
            }}
            onPressButton={handlepress}
            activeOpacity={0.8}
          />
        </View>
      ) : null}
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
    // paddingVertical: 10,
    alignItems: 'center',
    // justifyContent: 'space-between',
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
