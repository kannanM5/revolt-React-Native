import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

const BottomDetails = [
  {
    img: require('../Assets/Png/navigation.png'),
    label: 'Navigate',
    pressFun: 'Navigate',
  },
  {
    img: require('../Assets/Png/wallet.png'),
    label: 'Wallet',
    pressFun: 'Wallet',
  },

  {
    img: require('../Assets/Png/products.png'),
    label: 'PRODUCT',
    pressFun: 'PRODUCT',
  },

  {
    img: require('../Assets/Png/newsfeed.png'),
    label: 'News Feed',
    pressFun: 'News Feed',
  },
];

function CustomBottomContent({state, descriptors, navigation}, props) {
  const [activeItem, setActiveItem] = useState('Charging');

  const handlepress = screenName => {
    setActiveItem(screenName);
    props.navigation.navigate('ManageProfile');
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

        return (
          <View style={styles.sectionContent}>
            {BottomDetails.map((e, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? {selected: true} : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}>
                  <View style={styles.section}>
                    <Image style={styles.image} source={e.img} />
                    <Text style={styles.textString}>
                      {e.label.toUpperCase()}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

export default CustomBottomContent;

// const CustomBottom = props => {
//   const [activeItem, setActiveItem] = useState('Charging');

//   const handlepress = screenName => {
//     setActiveItem(screenName);
//     props.navigation.navigate('ManageProfile');
//   };

//   return (
//     <View style={styles.container}>
//       {BottomDetails.map((e, i) => {
//         return (
//           <TouchableOpacity
//             onPress={() => handlepress(e.pressFun)}
//             key={i}
//             style={{
//               backgroundColor: activeItem === e.label ? 'yellow' : 'white',
//             }}>
//             <View style={styles.section} key={i}>
//               <Image style={styles.image} source={e.img} />
//               <Text style={styles.text}>{e.label.toUpperCase()}</Text>
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

const styles = StyleSheet.create({
  textString: {
    fontSize: 11.5,
    marginHorizontal: 18,
    fontWeight: 700,
    color: 'rgba(0, 0, 0, 0.9)',
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
    elevation: 10,
    borderTopWidth: 2,
    borderTopColor: '#F9F9F9',
  },
  image: {
    width: 24,
    height: 26,
    alignSelf: 'center',
    marginBottom: 3,
  },
});
