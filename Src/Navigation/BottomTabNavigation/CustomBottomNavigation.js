import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {FONTS} from '../../Utilities/Fonts';

const BottomDetails = [
  {
    img: require('../../Assets/Png/navigate.png'),
    label: 'Navigate',
    pressFun: 'Navigate',
    id: 1,
  },
  {
    img: require('../../Assets/Png/wallet.png'),
    label: 'WALLET',
    pressFun: 'WalletStack',
    id: 2,
  },

  {
    img: require('../../Assets/Png/products.png'),
    label: 'PRODUCT',
    pressFun: 'ProductsStack',
    id: 3,
  },

  {
    img: require('../../Assets/Png/newsfeed.png'),
    label: 'NEWSFEED',
    pressFun: 'NewsStack',
    id: 4,
  },
];

function CustomBottomNavigation({state, descriptors, navigation}) {
  const [activeItem, setActiveItem] = useState(null);
  const [keyboardVisible, setKeyboardVisible] = useState(true);

  const {routes, index} = state;
  const activeRoute = routes[index].name;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(false),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(true),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handlepress = screenName => {
    setActiveItem(screenName);
    navigation.navigate(screenName);
  };
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        // const isFocused = state.index === index;

        // const onPress = () => {
        //   const event = navigation.emit({
        //     type: 'tabPress',
        //     target: route,
        //     canPreventDefault: true,
        //   });

        //   if (!isFocused && !event.defaultPrevented) {
        //     navigation.navigate(e.pressFun);
        //   }
        // };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          keyboardVisible && (
            <View style={styles.sectionContent} key={index}>
              {BottomDetails.map((e, i) => {
                const isFocused = activeRoute === e.pressFun;

                return (
                  <TouchableOpacity
                    key={e.id}
                    activeOpacity={0.8}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? {selected: true} : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={() => handlepress(e.pressFun)}
                    onLongPress={onLongPress}>
                    <View style={styles.section} key={i}>
                      <Image
                        style={[
                          styles.image,
                          {
                            backgroundColor: isFocused
                              ? 'rgba(252, 220, 12,0.4)'
                              : 'white',
                            borderRadius: 5,
                            padding: 5,
                          },
                        ]}
                        source={e.img}
                      />
                      <Text style={styles.textString}>
                        {e.label.toUpperCase()}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          )
        );
      })}
    </View>
  );
}

export default CustomBottomNavigation;

const styles = StyleSheet.create({
  textString: {
    fontSize: 11.5,
    marginHorizontal: 17,
    color: 'rgba(0, 0, 0, 0.9)',
    fontFamily: FONTS.Andika.bold,
  },
  section: {
    justifyContent: 'space-between',
  },
  sectionContent: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
    paddingVertical: 8,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 2,
    borderTopWidth: 1,
    borderTopColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  image: {
    width: 24,
    height: 26,
    alignSelf: 'center',
    marginBottom: 3,
  },
});
