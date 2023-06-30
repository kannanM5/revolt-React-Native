import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import {items, starDataArray} from '../../SharedComponents/Arrays';
import {useNavigation} from '@react-navigation/native';
import Header from './Header';
import {FONTS} from '../../Utilities/Fonts';
import SVGIcons from '../../Components/SVGIcon';

const Products = () => {
  const showIndicator = true;
  const navigation = useNavigation();

  const handlePress = item => {
    navigation.navigate('product', {items: item});
  };

  const handleOPenDrawer = () => {
    navigation.openDrawer();
    console.log('correct');
  };
  return (
    <View style={{flex: 1}}>
      <Header
        defaultSource={require('../../Assets/Png/menu.png')}
        onPress={handleOPenDrawer}
      />
      <View style={styles.container}>
        <View style={styles.searchBoxContainer}>
          <InputBox placeholder="Search for your locations" />
          <View style={styles.searchContain}>
            <Image
              source={require('../../Assets/Png/search.png')}
              style={styles.searchIcon}
            />
          </View>
        </View>
        <View style={{flex: 1, marginBottom: 60}}>
          <FlatList
            data={items}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            // columnWrapperStyle={styles.columnWrapper}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handlePress(item)}
                style={{
                  flex: 1,
                  marginRight: 5,
                  marginLeft: 5,
                }}>
                <View style={styles.product}>
                  <View style={styles.top}>
                    {showIndicator && item.indicator ? (
                      <Text style={styles.indicator}>{item.indicator}</Text>
                    ) : (
                      <Text></Text>
                    )}
                    <Image style={styles.like} source={item.like} />
                  </View>
                  <View
                    style={[
                      styles.imgContainer,
                      {backgroundColor: item.color},
                    ]}>
                    <SVGIcons width={70} height={76} Icon={item.img} />
                  </View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>₹ {item.price}</Text>

                  <View style={styles.rating}>
                    {starDataArray.map((e, i) => {
                      return (
                        <Image
                          source={e.pressImg}
                          style={styles.star}
                          key={i}
                        />
                      );
                    })}
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 10,
    flex: 1,
  },
  searchBoxContainer: {
    marginBottom: 15,
  },

  columnWrapper: {
    justifyContent: 'space-between',
  },
  product: {
    width: '100%',
    height: 220,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    position: 'relative',
    padding: 10,
    marginBottom: 10,
    elevation: 1,
    // flex: 1,
  },
  imgContainer: {
    width: 101,
    height: 101,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  image: {
    width: 70,
    height: 96,
  },
  name: {
    fontSize: 12,
    color: 'black',
    paddingTop: 10,
    fontFamily: FONTS.Andika.bold,
  },
  price: {
    fontSize: 12,
    color: 'red',
    fontFamily: FONTS.Andika.bold,
  },
  like: {
    width: 11,
    height: 10,
  },
  indicator: {
    fontSize: 9,
    fontWeight: 600,
    color: 'black',
    backgroundColor: '#ADE1F6',
    width: 31,
    height: 18,
    borderRadius: 7,
    paddingHorizontal: 7,
    paddingVertical: 2,
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    marginTop: 5,
  },
  star: {
    marginRight: 3,
    width: 11,
    height: 11,
  },
  searchContain: {
    position: 'absolute',
    bottom: 12,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 7,
    borderRadius: 10,
  },
  searchIcon: {
    width: 11,
  },
});
