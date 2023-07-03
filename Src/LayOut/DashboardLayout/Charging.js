import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputBox from '../../Components/InputBox';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import DateTimePicker from '../../Components/DateTimePicker';
import MapView, {Marker} from 'react-native-maps';
import {ParkingImages, chargingImages} from '../../SharedComponents/Arrays';
import Carosel from '../../Components/Carosel';
import Header from './Header';
import {FONTS} from '../../Utilities/Fonts';
import {COLORS} from '../../Utilities/Colors';
import SVGIcons from '../../Components/SVGIcon';

const Charging = props => {
  const navigation = useNavigation();
  const [activeItem, setActiveItem] = useState(null);

  const [markerCoordinates, setMarkerCoordinates] = useState({
    latitude: 11.004556,
    longitude: 76.961632,
  });

  const handleSubmit = name => {
    if (name === 'parking') {
      if (activeItem === 'parking') {
        setActiveItem(null);
      } else {
        setActiveItem('parking');
      }
    } else if (name === 'charging') {
      if (activeItem === 'charging') {
        setActiveItem(null);
      } else {
        setActiveItem('charging');
      }
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 11.004556,
          longitude: 76.961632,
          latitudeDelta: 0.095,
          longitudeDelta: 0.047,
        }}
        onPress={event => {
          const {latitude, longitude} = event.nativeEvent.coordinate;
          setMarkerCoordinates({latitude, longitude});
        }}
        scrollEnabled={true}
        style={styles.map}>
        <Marker
          coordinate={markerCoordinates}
          title="My Marker"
          description="This is you searched"
        />
      </MapView>

      <View style={styles.header}>
        <Header
          defaultSource={require('../../Assets/Png/menu.png')}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>

      <View style={styles.searchBoxContainer}>
        <InputBox
          placeholder="Search for your locations"
          customInputStyles={styles.input}
        />
        <View style={styles.searchContain}>
          <Image
            source={require('../../Assets/Png/search.png')}
            style={styles.searchIcon}
          />
        </View>
      </View>
      <View style={styles.datePicker}>
        <DateTimePicker label="From" customStyles={styles.picker} />
        <DateTimePicker label="To" customStyles={styles.picker} />
      </View>

      <View
        style={[
          styles.buttonGroupContainer,
          activeItem === 'parking' || activeItem === 'charging'
            ? styles.containerCarosel
            : null,
        ]}>
        <View
          style={[
            styles.buttonGroup,
            activeItem === 'parking' || activeItem === 'charging'
              ? styles.BtnGRoup
              : null,
          ]}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles.button,
              activeItem === 'parking' && styles.activeBtn,
              activeItem === 'parking' || activeItem === 'charging'
                ? styles.BtnAfter
                : null,
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

              <Text
                style={[
                  styles.BtnText,
                  activeItem === 'parking' || activeItem === 'charging'
                    ? styles.BtnTextAfter
                    : null,
                ]}>
                Parking
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles.button,
              activeItem === 'charging' && styles.activeBtn,
              activeItem === 'parking' || activeItem === 'charging'
                ? styles.BtnAfter
                : null,
            ]}
            onPress={() => handleSubmit('charging')}>
            <View style={styles.btnContent}>
              <View
                style={[
                  styles.imgBox,
                  activeItem === 'charging' && styles.activeImg,
                ]}>
                <Image
                  style={styles.img}
                  source={require('../../Assets/Png/charge.png')}
                />
              </View>

              <Text
                style={[
                  styles.BtnText,
                  activeItem === 'parking' || activeItem === 'charging'
                    ? styles.BtnTextAfter
                    : null,
                ]}>
                Charging
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.zoom,
            activeItem === 'parking' || activeItem === 'charging'
              ? styles.zoomAfter
              : null,
          ]}>
          <Image
            style={
              activeItem === 'parking' || activeItem === 'charging'
                ? styles.zoomImg
                : styles.zoomImgafter
            }
            source={require('../../Assets/Png/zoom.png')}
          />
        </View>

        {activeItem === 'parking' ? (
          <View>
            <Text style={styles.titleEvent}>Nearest Parking (2)</Text>
            <Carosel
              dataArray={[...ParkingImages]}
              onPress={() => navigation.navigate('ParkingScreen')}
            />
          </View>
        ) : null}

        {activeItem === 'charging' ? (
          <View>
            <Text style={styles.titleEvent}>Nearest Charging (3)</Text>
            <Carosel
              dataArray={[...chargingImages]}
              onPress={() => navigation.navigate('ChargingScreen')}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Charging;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
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
  input: {
    backgroundColor: COLORS.white,
    elevation: 10,
  },

  searchIcon: {
    width: 11,
  },
  searchContain: {
    position: 'absolute',
    bottom: 12,
    right: 45,
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 7,
    borderRadius: 10,
  },
  searchBoxContainer: {
    flex: 1,
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    paddingHorizontal: 25,
    zIndex: 10,
  },
  map: {
    position: 'relative',
    flex: 1,
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 145,
    left: 0,
    right: 0,
    paddingHorizontal: 25,
    width: '100%',
  },
  picker: {
    backgroundColor: COLORS.white,
    elevation: 10,
  },
  buttonGroupContainer: {
    flex: 1,
    paddingHorizontal: 15,
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 70,
    marginHorizontal: 10,
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  BtnGRoup: {
    marginBottom: -1,
    justifyContent: 'flex-start',
  },
  BtnAfter: {
    width: 120,
    paddingHorizontal: 5,
    paddingVertical: 4,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    elevation: 10,
    width: 130,
    elevation: 10,
  },
  activeBtn: {
    backgroundColor: COLORS.buttonBgColor,
  },

  imgBox: {
    width: 39,
    height: 33,
    backgroundColor: COLORS.buttonBgColor,
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
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 0.85)',
  },
  BtnTextAfter: {
    paddingLeft: -5,
  },
  btnContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fontFamily: FONTS.Andika.bold,

  titleEvent: {
    fontSize: 17,
    fontFamily: FONTS.Andika.bold,
    color: COLORS.black,
    paddingVertical: 5,
  },
  containerCarosel: {
    backgroundColor: COLORS.white,
    elevation: 10,
    borderRadius: 30,
    paddingVertical: 12,
  },
  zoom: {
    position: 'absolute',
    right: 20,
    bottom: 100,
    backgroundColor: '#F2CC0C',
    width: 46,
    height: 41,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomAfter: {
    position: 'absolute',
    bottom: 166,
    right: 12,
    width: 35,
    height: 38,
    borderRadius: 12,
  },
  zoomImg: {
    width: 13,
    height: 12,
  },
  zoomImgafter: {
    width: 20,
    height: 18,
  },
});
