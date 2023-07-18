import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputBox from '../../Components/InputBox';
import {items, starDataArray, colors} from '../../SharedComponents/Arrays';
import Header from './Header';
import {FONTS} from '../../Utilities/Fonts';
import SVGIcons from '../../Components/SVGIcon';
import {productlist} from '../../Services/Services';
import {useSelector, useDispatch} from 'react-redux';
import {DrawerActions} from '@react-navigation/native';
import {FILESBASEURL} from '../../Utilities/Constants';
import {ICONS} from '../../Assets/Svg/icons';
import {trimString} from '../../Utilities/Constants';
import Loader from '../AuthLayout/Loader';
import {setProductList} from '../../Store/Slices/ProductSlice';

const Products = ({navigation}) => {
  const showIndicator = true;
  const dispatch = useDispatch();
  const myToken = useSelector(state => state.auth.token);
  const products = useSelector(state => state.product.productsList);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    handleProductList();
  }, []);

  const handleProductList = () => {
    setLoading(true);

    let formData = new FormData();
    formData.append('token', myToken);
    formData.append('pagenumber', 1);
    formData.append('search_string', search);

    productlist(formData)
      .then(res => {
        console.log(res.data);
        if (res.data.status === 1) {
          let refData = [...res.data.product_list];
          refData = refData.map(e => {
            return {
              ...e,
              Qty: 1,
            };
          });
          dispatch(setProductList(refData));
        }
      })
      .catch(error => console.log(error, 'error'))
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    <Loader />;
  }

  const handlePress = item => {
    navigation.navigate('product', {items: item});
  };

  const handleSearch = text => {
    setSearch(text);
  };

  const handleOPenDrawer = () => {
    // navigation.openDrawer();
    navigation.dispatch(DrawerActions.toggleDrawer());
    console.log('correct');
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={{flex: 1}}>
      <Header
        defaultSource={require('../../Assets/Png/menu.png')}
        onPress={handleOPenDrawer}
      />
      <View style={styles.container}>
        <View style={styles.searchBoxContainer}>
          <InputBox
            placeholder="Search for your locations"
            value={search}
            onChangeText={handleSearch}
          />
          <TouchableOpacity
            style={styles.searchContain}
            activeOpacity={0.9}
            onPress={handleProductList}>
            <Image
              source={require('../../Assets/Png/search.png')}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginBottom: 60}}>
          <FlatList
            data={products}
            refreshControl={
              <RefreshControl
                onRefresh={onRefresh}
                refreshing={refreshing}
                progressBackgroundColor={'white'}
                colors={['#FCDC0C']}
              />
            }
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={loading && <Loader />}
            numColumns={2}
            // columnWrapperStyle={styles.columnWrapper}
            keyExtractor={item => item.id}
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
                    {/* {showIndicator && item.indicator ? (
                      <Text style={styles.indicator}>{item.indicator}</Text>
                    ) : (
                      <Text></Text>
                    )} */}
                    {/* <Image style={styles.like} source={item.like} /> */}
                    <SVGIcons width={11} height={10} Icon={ICONS.hearticon} />
                  </View>

                  <View
                    style={[
                      styles.imgContainer,
                      // {backgroundColor: item.color},
                    ]}>
                    {/* <SVGIcons width={70} height={76} Icon={item.img} /> */}
                    <Image
                      source={{uri: FILESBASEURL + item.image_url}}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                  <Text style={styles.name}>
                    {trimString(item.product_name, 15)}
                  </Text>
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
    position: 'relative',
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
