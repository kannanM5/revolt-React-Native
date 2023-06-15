import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../Components/InputBox';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import DateTimePicker from '../../Components/DateTimePicker';

import MapView, {Marker} from 'react-native-maps';
import {LatLngBounds} from 'react-native-maps';

const Charging = () => {
  const navigation = useNavigation();
  const [activeItem, setActiveItem] = useState(null);
  const [activeParking, setActiveParking] = useState(false);
  const [activeCharging, setActiveCharging] = useState(false);

  // const coordinates = [
  //   {latitude: 37.78825, longitude: -122.4324},
  //   {latitude: 37.7588, longitude: -122.3912},
  // ];

  // const bounds = new LatLngBounds();
  // coordinates.forEach(coord => {
  //   bounds.extend(coord);
  // });

  const handleSubmit = name => {
    if (name === 'parking') {
      setActiveItem('parking');
      setActiveCharging(false);
    } else if (name === 'charging') {
      setActiveItem('charging');
      setActiveParking(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
            // navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <Image
            style={styles.menu}
            source={require('../../Assets/Png/menu.png')}
          />
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
      {/* <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{flex: 1}}
        ref={ref => {
          this.map = ref;
        }}>
        <MapView.Marker coordinate={coordinates[0]} />
        <MapView.Marker coordinate={coordinates[1]} />
        <MapView.Marker coordinate={coordinates[n]} />
        <MapView.LatLngBounds
          bounds={bounds}
          edgePadding={{top: 50, right: 50, bottom: 50, left: 50}}
          animated={true}
        />
      </MapView> */}
      <View style={styles.content}>
        <InputBox
          placeholder="Search for your locations"
          customInputStyle={{position: 'relative'}}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../Assets/Png/search.png')}
            style={{
              width: 11,
              position: 'absolute',
              bottom: 20,
              right: 20,
              backgroundColor: '#F2F2F2',
            }}
          />
        </View>

        <View style={styles.datePicker}>
          <DateTimePicker label="From" />
          <DateTimePicker label="To" />
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.button,
              activeItem === 'parking' && styles.activeBtn,
            ]}
            onPress={() => handleSubmit('parking')}>
            <View style={styles.btnContent}>
              <View
                style={[
                  styles.imgBox,
                  activeItem === 'parking' && styles.activeImg,
                ]}>
                <Image
                  style={styles.img}
                  source={require('../../Assets/Png/park.png')}
                />
              </View>

              <Text style={styles.BtnText}>Parking</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeItem === 'charging' && styles.activeBtn,
            ]}
            onPress={() => handleSubmit('charging')}>
            <View style={styles.btnContent}>
              <View style={[styles.imgBox, activeItem && styles.activeImg]}>
                <Image
                  style={styles.img}
                  source={require('../../Assets/Png/charge.png')}
                />
              </View>

              <Text style={styles.BtnText}>Charging</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Charging;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 15,
    elevation: 1,
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
  content: {
    marginHorizontal: 40,
    marginVertical: 10,
    flex: 1,
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    position: 'absolute',
    // bottom: 30,
    top: 440,
    // left: 3,
    // right: 3,
  },
  button: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 6,
    elevation: 2,
    margin: 5,
  },
  activeBtn: {
    backgroundColor: '#FCDC0C',
  },

  imgBox: {
    width: 42,
    height: 36,
    backgroundColor: '#FCDC0C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeImg: {
    backgroundColor: '#F9F9F9',
  },
  img: {
    paddingLeft: 10,
  },
  BtnText: {
    fontSize: 14,
    fontWeight: 700,
    paddingLeft: 10,
  },
  btnContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
