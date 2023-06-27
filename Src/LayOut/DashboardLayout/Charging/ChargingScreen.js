import {StyleSheet, View} from 'react-native';
import React from 'react';
import ChargingDetails from './ChargingDetails';
import Header from '../Header';
import {useNavigation} from '@react-navigation/native';
import ChargingTopStack from '../../../Stacks/ChargingTopStack';

const ChargingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        defaultSource={require('../../../Assets/Png/goback1.png')}
        onPress={() => navigation.goBack()}
      />
      <View style={{flex: 1, marginBottom: 50}}>
        <ChargingDetails />
      </View>

      <View style={{flex: 1, marginBottom: 50, marginTop: -10}}>
        <ChargingTopStack />
      </View>
    </View>
  );
};

export default ChargingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
