import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = ({onPress, defaultSource, customStyles}) => {
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
        source={require('../../Assets/Png/notification.png')}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    paddingVertical: 15,
    elevation: 5,
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: 'white',
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
    width: 20.5,
    height: 24,
  },
});
