import {StyleSheet, View} from 'react-native';
import React from 'react';
import HostBookingTopStack from '../../../Stacks/HostBookingTopStack';
import Header from '../Header';

const HostBookingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        defaultSource={require('../../../Assets/Png/goback1.png')}
        onPress={() => navigation.goBack()}
      />

      <View style={{flex: 1}}>
        <HostBookingTopStack />
      </View>
    </View>
  );
};

export default HostBookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
