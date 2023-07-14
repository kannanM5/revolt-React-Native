import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {starDataArray} from '../../../SharedComponents/Arrays';
import {FONTS} from '../../../Utilities/Fonts';
import {useSelector} from 'react-redux';
import {FILESBASEURL} from '../../../Utilities/Constants';

const ChargingDetails = () => {
  const data = useSelector(state => state?.home?.homeList);
  const {width: windowWidth} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        pagingEnabled
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: windowWidth - 50,
                paddingHorizontal: 5,
              }}>
              <Image
                style={{
                  height: 140,
                  marginTop: 8,
                  borderRadius: 8,
                }}
                source={{uri: FILESBASEURL + item.station_image}}
              />
              <Text style={styles.shopTitle}>{item.station_name}</Text>
              <Text style={styles.address}>{item.location}</Text>
              <View style={{flexDirection: 'row', paddingVertical: 8}}>
                <Text
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: 'black',
                    marginRight: 10,
                  }}>
                  4.0
                </Text>
                <View style={styles.rating}>
                  {starDataArray.map((e, i) => {
                    return (
                      <Image
                        source={e.pressed ? e.pressImg : e.img}
                        style={styles.star}
                        key={i}
                      />
                    );
                  })}
                </View>
              </View>
              <View style={styles.section}>
                <View style={[styles.section, {marginRight: 15}]}>
                  <Image
                    style={{marginRight: 10}}
                    source={require('../../../Assets/Png/location.png')}
                  />
                  <Text style={styles.text}>
                    {Math.floor(item.distance).toString().slice(0, 2) / 10} km
                    for you
                  </Text>
                </View>
                <View style={styles.section}>
                  <Image
                    style={{marginRight: 10}}
                    source={require('../../../Assets/Png/socket.png')}
                  />
                  <Text style={styles.text}>
                    {item.total_sockets} Charging sockets
                  </Text>
                </View>
              </View>
            </View>
          );
        }}></FlatList>
    </View>
  );
};

export default ChargingDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginBottom: -10,
  },
  shopTitle: {
    fontSize: 24,
    color: 'black',
    paddingBottom: 6,
    fontFamily: FONTS.Andika.bold,
  },
  address: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.65)',
    fontFamily: FONTS.Andika.regular,
    lineHeight: 20,
    width: 310,
  },
  rating: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  star: {
    marginRight: 3,
    width: 12,
    height: 12,
  },
  section: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 13,
    fontFamily: FONTS.Andika.regular,
    color: 'rgba(0, 0, 0, 0.8)',
  },
});
