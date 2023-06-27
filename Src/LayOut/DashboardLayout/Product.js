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
import {useNavigation, useRoute} from '@react-navigation/native';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';
import SVGIcons from '../../Components/SVGIcon';

const Product = () => {
  const route = useRoute();
  const product = route.params.items;
  const [activeItem, setActiveItem] = useState(2);
  const [count, setCount] = useState(1);
  const navigation = useNavigation();

  const handlepress = event => {
    setActiveItem(event);
    console.log(event);
  };
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handlerGoBack = () => {
    navigation.navigate('PRODUCT');
  };

  return (
    <ScrollView>
      <SubHeader titleName="EV Charger" onPress={handlerGoBack} />

      <View style={styles.container}>
        <View style={{backgroundColor: product.color, marginBottom: 10}}>
          <SVGIcons
            width={230}
            height={230}
            Icon={product.img}
            customImgStyles={{marginHorizontal: 10, marginVertical: 10}}
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
            <TouchableOpacity onPress={decrement}>
              <Image source={require('../../Assets/Png/sub.png')} />
            </TouchableOpacity>

            <Text style={styles.count}>{count}</Text>
            <View style={styles.line}></View>

            <TouchableOpacity onPress={increment}>
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
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 15,
    marginBottom: 55,
    flex: 1,
  },
  image: {
    width: 290,
    height: 230,
    position: 'relative',
    // padding: 10,
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
    flex: 1,
  },
  button: {
    width: 162,
    height: 51,
    paddingHorizontal: 10,
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
