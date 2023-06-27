import {View} from 'react-native';
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
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header
          onPress={handleSubmit}
          defaultSource={require('../../../Assets/Png/goback1.png')}
        />
        <View style={{}}>
          <ParkingDetails />
        </View>

        <View style={{flex: 1, marginBottom: 50}}>
          <ParkingTopStack />
        </View>
      </View>
    </View>
  );
};
