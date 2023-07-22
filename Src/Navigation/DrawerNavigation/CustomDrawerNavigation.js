import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {FONTS} from '../../Utilities/Fonts';
import {COLORS} from '../../Utilities/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../Services/Services';
import {getUrlWithPrefix, removeToken} from '../../Utilities/Methods';
import Toast from 'react-native-simple-toast';
import {FILESBASEURL, trimString} from '../../Utilities/Constants';
import {useToken} from '../../Utilities/Constants';

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
    // pressFun: 'Logout',
  },
];

const CustomDrawerNavigation = props => {
  const myToken = useToken();
  const profile = useSelector(state => state.profile.profileArr);
  // console.log(profile.profile_image);
  const [activeItem, setActiveItem] = useState(null);
  const dispatch = useDispatch();

  const handleLogout = () => {
    const formData = new FormData();
    formData.append('token', myToken);
    logout(formData)
      .then(res => {
        if (res.data.status === 1) {
          removeToken(dispatch);
          Toast.show('Succesfully logged out');
        }
      })
      .catch(err => console.log(err));
  };

  const handlepress = item => {
    if (item.label === 'Logout') {
      handleLogout();
    } else {
      setActiveItem(item.pressFun);
      props.navigation.navigate(item.pressFun);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containImg}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.img}
            source={{
              uri: profile.profile_image,
            }}
          />
          <View>
            <Text
              style={[
                styles.text,
                {fontFamily: FONTS.Andika.bold, paddingTop: 5},
              ]}>
              {profile.name}
            </Text>
            <Text style={styles.num}>{profile.mobile}</Text>
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
            style={
              activeItem == item.pressFun ? styles.Active : styles.Inactive
            }>
            <View
              style={[
                styles.section,
                activeItem == item.pressFun
                  ? styles.activeItem
                  : styles.InactiveItem,
              ]}>
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
    paddingLeft: 27,
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
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.07)',
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
  Active: {
    backgroundColor: 'rgba(252, 220, 12,0.2)',
  },
  Inactive: {
    backgroundColor: COLORS.white,
  },
  activeItem: {
    borderLeftWidth: 12,
    borderLeftColor: 'rgba(252, 220, 12,1)',
  },
  InactiveItem: {
    borderLeftWidth: 12,
    borderLeftColor: 'white',
  },
});
