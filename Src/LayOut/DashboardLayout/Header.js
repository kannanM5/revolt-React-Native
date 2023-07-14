import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Header = ({onPress, defaultSource, customStyles}) => {
  const cartCount = useSelector(state => state.product.cartCount);

  return (
    <View style={[styles.header, {...customStyles}]}>
      {/* navigation.dispatch(DrawerActions.openDrawer()) */}
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.menu} source={defaultSource} />
      </TouchableOpacity>

      <Image
        style={styles.logo}
        source={require('../../Assets/Png/Revolt-logo.png')}
      />
      <Image
        style={styles.notification}
        source={require('../../Assets/Png/notify.png')}
      />
      <View style={styles.quantityCountContainer}>
        <Text style={styles.quantityCount}>{cartCount}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    paddingVertical: 15,
    elevation: 5,
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: 'white',
    paddingHorizontal: 20,
  },
  menu: {
    width: 20,
    height: 19.5,
  },
  logo: {
    width: 135,
    height: 34,
  },
  notification: {
    width: 25,
    height: 25,
    position: 'relative',
  },
  quantityCount: {
    fontSize: 6,
    color: '#FFD801',
    fontWeight: 700,
  },
  quantityCountContainer: {
    backgroundColor: '#FC3A3A',
    width: 8,
    height: 8,
    borderRadius: 6,
    position: 'absolute',
    top: 23,
    right: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
