import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../Components/Button';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';
import SVGIcons from '../../Components/SVGIcon';
import {FILESBASEURL, useToken} from '../../Utilities/Constants';
import {addtocart} from '../../Services/Services';
import {useSelector, useDispatch} from 'react-redux';
import {setQuantity, setCartList} from '../../Store/Slices/ProductSlice';

const Product = ({navigation, route}) => {
  const product = route.params.items;
  const [activeItem, setActiveItem] = useState(2);
  const dispatch = useDispatch();
  const myToken = useToken();
  let productArr = useSelector(state => state.product.productsList);

  const SETQUANTITY = () => {
    const ind = productArr.findIndex(ele => ele.id === product.id);
    let myQty = productArr[ind].Qty;

    return myQty;
  };

  const handlepress = event => {
    if (event === 1) {
      setActiveItem(event);

      const formData = new FormData();
      formData.append('token', myToken);
      formData.append('product_id', product.id);
      formData.append('quantity', SETQUANTITY());

      addtocart(formData)
        .then(res => {
          console.log(res.data);
          if (res.data.status === 1) {
            dispatch(setCartList(productArr));
            console.log('success');
          }
        })
        .catch(error => console.log(error, 'error'));
    } else {
      setActiveItem(event);
    }
  };

  const handlerGoBack = () => {
    // navigation.navigate('PRODUCT');
    navigation.goBack();
  };

  return (
    <>
      <SubHeader titleName="EV Charger" onPress={handlerGoBack} />
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: product.color,
              marginBottom: 10,
              width: '100%',
            }}>
            {/* <SVGIcons
              width={230}
              height={230}
              Icon={product.img}
              customImgStyles={{marginHorizontal: 10, marginVertical: 10}}
            /> */}
            <Image
              style={{width: '100%', height: 300}}
              source={{uri: FILESBASEURL + product.image_url}}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              right: 20,
              top: 15,
              padding: 7,
              borderRadius: 15,
              backgroundColor: 'white',
            }}>
            <Image source={require('../../Assets/Png/liked.png')} />
          </View>

          <View style={styles.rate}>
            <View style={styles.priceGroup}>
              <Text style={styles.price}>₹{product.price}</Text>
              <Text style={styles.price1}>₹90,000</Text>
            </View>
            <Text style={styles.stock}>5 in Stock</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.quantity}>Order Quantity</Text>

            <View style={styles.counter}>
              <TouchableOpacity
                onPress={() =>
                  dispatch(setQuantity({id: product.id, type: 'DECRE'}))
                }
                activeOpacity={0.8}>
                <Image source={require('../../Assets/Png/sub.png')} />
              </TouchableOpacity>

              <Text style={styles.count}>{SETQUANTITY()}</Text>
              <View style={styles.line}></View>

              <TouchableOpacity
                onPress={() =>
                  dispatch(setQuantity({id: product.id, type: 'INCRE'}))
                }
                activeOpacity={0.8}>
                <Image source={require('../../Assets/Png/add.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.title}>
            IP65 0-300 Charging Stations for Electrical Vechicles, 380
          </Text>
          <Text style={styles.prodcutDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh a,
            mattis libero nec etiam. Nisl odio facilisi laoreet scelerisque.
          </Text>
          <View style={styles.BtnContainer}>
            <Button
              title="Add to cart"
              customStyles={
                activeItem === 1 ? styles.activeBtn : styles.inActiveBtn
              }
              customStylesText={
                activeItem === 1 ? styles.activeBtnText : styles.inActiveBtnText
              }
              onPressButton={() => handlepress(1)}
            />
            <Button
              title="Buy Now"
              customStyles={
                activeItem === 2 ? styles.activeBtn : styles.inActiveBtn
              }
              customStylesText={
                activeItem === 2 ? styles.activeBtnText : styles.inActiveBtnText
              }
              onPressButton={() => handlepress(2)}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10,
    flex: 1,
    marginBottom: 63,
  },
  image: {
    width: 290,
    height: 230,
    position: 'relative',
  },
  rate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 24,
    color: '#FC3A3A',
    marginRight: 10,
    fontFamily: FONTS.Andika.bold,
  },
  price1: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.4)',
    fontFamily: FONTS.Andika.bold,
    textDecorationLine: 'line-through',
  },
  stock: {
    fontSize: 15,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantity: {
    fontSize: 15,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  counter: {
    flexDirection: 'row',
  },
  count: {
    fontSize: 15,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 0.8)',
    marginHorizontal: 10,
    position: 'relative',
  },
  line: {
    position: 'absolute',
    top: 23,
    left: 30,
    right: 15,
    height: 1,
    backgroundColor: 'gray',
    width: 22,
  },

  title: {
    fontSize: 20,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 0.9)',
    lineHeight: 27,
    marginVertical: 5,
  },
  prodcutDetails: {
    fontSize: 14.5,
    lineHeight: 21,
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: FONTS.Andika.regular,
  },
  BtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  activeBtn: {
    backgroundColor: '#FCDC0C',
    width: 142,
    height: 51,
  },
  inActiveBtn: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#F3F3F3',
    width: 142,
    height: 51,
  },
  activeBtnText: {
    color: 'white',
  },
  inActiveBtnText: {
    color: 'gray',
  },
});
