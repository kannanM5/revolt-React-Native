import {StyleSheet, View} from 'react-native';
import React from 'react';

const SVGIcons = ({height = 25, width = 25, Icon, customImgStyles}) => {
  // const Icon = ICONS[icon];
  return (
    <View style={styles.container} activeOpacity={0.7}>
      <Icon height={height} width={width} style={{...customImgStyles}} />
    </View>
  );
};

export default SVGIcons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
