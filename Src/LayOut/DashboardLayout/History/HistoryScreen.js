import {StyleSheet, View} from 'react-native';
import React from 'react';
import HistoryTopStack from '../../../Stacks/HistoryTopStack';
import SubHeader from '../../../Components/SubHeader';

const HistoryScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SubHeader titleName="History" onPress={() => navigation.goBack()} />
      <HistoryTopStack />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
});
