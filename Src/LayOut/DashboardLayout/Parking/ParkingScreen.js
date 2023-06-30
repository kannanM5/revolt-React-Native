import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../Header';
import ParkingDetails from './ParkingDetails';
import ParkingTopStack from '../../../Stacks/ParkingTopStack';

export const ParkingScreen = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header
        onPress={handleSubmit}
        defaultSource={require('../../../Assets/Png/goback1.png')}
      />
      <ParkingDetails />
      <ParkingTopStack />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
