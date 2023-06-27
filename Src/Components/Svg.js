import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Car from '../Assets/Svg/car1.svg';
import {SvgUri} from 'react-native-svg';

const Svg = ({source, width, height}) => {
  return (
    <View>
      {/* <SvgUri width={width} height={height} />
       */}
      <Car />
    </View>
  );
};

export default Svg;

const styles = StyleSheet.create({});
