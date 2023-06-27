import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {FONTS} from '../../Utilities/Fonts';

const DrawerDetails = [
  {
    img: require('../../Assets/Png/profile.png'),
    label: 'Manage profile',
    pressFun: 'ManageProfile',
  },
  {
    img: require('../../Assets/Png/payment.png'),
    label: 'Payment detail',
    pressFun: 'Paymentdetail',
  },
  {
    img: require('../../Assets/Png/booking.png'),
    label: 'Booking',
    pressFun: 'BookingScreen',
  },
  {
    img: require('../../Assets/Png/history.png'),
    label: 'History',
    pressFun: 'HistoryScreen',
  },
  {
    img: require('../../Assets/Png/review.png'),
    label: 'App Reviews & Ratings',
    pressFun: 'AppReviewsRatings',
  },
  {
    img: require('../../Assets/Png/report.png'),
    label: 'Share App',
    pressFun: 'ShareApp',
  },
  {
    img: require('../../Assets/Png/share.png'),
    label: 'Report Issue',
    pressFun: 'ReportIssue',
  },

  {
    img: require('../../Assets/Png/host.png'),
    label: 'Become Host',
    pressFun: 'BecomeHost',
  },
  {
    img: require('../../Assets/Png/bookhost.png'),
    label: 'Host Booking',
    pressFun: 'HostBookingScreen',
  },

  {
    img: require('../../Assets/Png/conditions.png'),
    label: 'Terms and Conditions',
    pressFun: 'TermsAndConditions',
  },
  {
    img: require('../../Assets/Png/logout.png'),
    label: 'Logout',
    pressFun: 'Logout',
  },
];

const CustomDrawerNavigation = props => {
  const [activeItem, setActiveItem] = useState(null);
  // const navigation = useNavigation();

  const handlepress = item => {
    setActiveItem(item.pressFun);
    props.navigation.navigate(item.pressFun);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containImg}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.img}
            source={require('../../Assets/Png/demo.png')}
          />
          <View>
            <Text
              style={[
                styles.text,
                {fontFamily: FONTS.Andika.bold, paddingTop: 5},
              ]}>
              Anderson
            </Text>
            <Text style={styles.num}>9595959595</Text>
          </View>
        </View>
        <View style={{paddingTop: 20, marginHorizontal: 25}}>
          <Image
            style={{justifyContent: 'flex-end'}}
            source={require('../../Assets/Png/dots.png')}
          />
        </View>
      </View>

      <FlatList
        data={DrawerDetails}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handlepress(item)}
            style={{
              backgroundColor:
                activeItem == item.pressFun ? 'rgba(252, 220, 12,1)' : 'white',
            }}>
            <View style={styles.section}>
              <Image source={item.img} />
              <Text style={styles.text}>{item.label}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CustomDrawerNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  containImg: {
    backgroundColor: '#F3F3F3',
    paddingLeft: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 5,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  img: {
    width: 60,
    height: 60,
    borderWidth: 4,
    borderColor: '#F2B705',
    borderRadius: 30,
  },
  section: {
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 20,
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginHorizontal: 15,
    color: 'rgba(0, 0, 0, 0.8)',
    fontFamily: FONTS.Andika.regular,
  },
  num: {
    marginHorizontal: 15,
    fontSize: 14,
    color: 'rgba(0,0,0,0.6)',
    fontFamily: FONTS.Andika.regular,
  },
});
