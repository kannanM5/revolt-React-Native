import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {starDataArray} from '../../../SharedComponents/Arrays';
import {FONTS} from '../../../Utilities/Fonts';
import {useSelector} from 'react-redux';
import {FILESBASEURL} from '../../../Utilities/Constants';

const ParkingDetails = () => {
  const data = useSelector(state => state?.home?.homeList);
  const {width: windowWidth} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        // initialNumToRender={10}
        showsHorizontalScrollIndicator={false}
        // ItemSeparatorComponent={<View style={{width: 10}} />}
        ListEmptyComponent={
          <View
            style={{
              width: 307,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 100,
            }}>
            <Text
              style={{
                fontSize: 22,
              }}>
              No Data found
            </Text>
          </View>
        }
        // ListFooterComponent={
        //   <View style={styles.componentStyle}>
        //     <Text style={{fontSize: 22}}>End of List</Text>
        //   </View>
        // }
        // ListHeaderComponent={
        //   <View style={styles.componentStyle}>
        //     <Text style={{fontSize: 22}}>Start of List</Text>
        //   </View>
        // }
        data={data}
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
        }}
      />
    </View>
  );
};
export default ParkingDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginBottom: -10,
  },
  shopTitle: {
    fontSize: 24,
    fontFamily: FONTS.Andika.bold,
    color: 'black',
    paddingBottom: 2,
  },
  address: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.65)',
    fontFamily: FONTS.Andika.regular,
    lineHeight: 20,
    width: 300,
  },
  rating: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 5,
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

  customerImg: {
    width: 39,
    height: 39,
    backgroundColor: 'red',
  },
  componentStyle: {
    flex: 1,
    width: 310,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 9,
    marginRight: 5,
    backgroundColor: '#C4C4C4',
    marginRight: 15,
    borderRadius: 6,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
