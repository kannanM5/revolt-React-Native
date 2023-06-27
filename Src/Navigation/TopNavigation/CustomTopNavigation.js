import {StyleSheet, View, TouchableOpacity, Animated} from 'react-native';
import React from 'react';
import {FONTS} from '../../Utilities/Fonts';

const CustomTopNavigation = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 20,
        marginHorizontal: 25,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);

        return (
          <TouchableOpacity
            accessibilityRole="button"
            key={index}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Animated.Text style={isFocused ? styles.label : styles.label1}>
              {label}
            </Animated.Text>
            <View
              style={{
                width: '99%',
                height: 1,
                backgroundColor: 'rgba(0,0,0,0.2)',
                position: 'absolute',
                top: 27.5,
              }}></View>
            {isFocused && <Animated.View style={[styles.lineIndicator]} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTopNavigation;

const styles = StyleSheet.create({
  lineIndicator: {
    height: 4,
    backgroundColor: '#FCDC0C',
    width: 50,
  },
  lineIndicatorNormal: {
    height: 3,
    backgroundColor: 'gray',
    width: '100%',
    marginTop: 6,
  },

  label: {
    fontSize: 14,
    color: 'black',
    fontFamily: FONTS.Andika.bold,
  },
  label1: {
    fontSize: 14,
    color: 'black',
    fontFamily: FONTS.Andika.regular,
  },
});
