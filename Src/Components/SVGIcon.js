import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICONS} from '../Assets/Svg/icons';

const SVGIcon = ({
  height = 25,
  width = 25,
  icon = 'visibility_on',
  marginLeft = 0,
  marginRight = 0,
  isButton = false,
  onPress,
}) => {
  const Icon = ICONS[icon];
  return isButton ? (
    <TouchableOpacity
      style={{
        marginLeft,
        marginRight,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      activeOpacity={0.7}
      onPress={onPress}>
      <Icon height={height} width={width} />
    </TouchableOpacity>
  ) : (
    <Icon height={height} width={width} style={{marginLeft, marginRight}} />
  );
};
export default SVGIcon;

const styles = StyleSheet.create({});
