import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {ScrollView} from 'react-native-gesture-handler';

const DrawerDetails = [
  {
    img: require('../Assets/Png/profile.png'),
    label: 'Manage profile',
    pressFun: 'ManageProfile',
    id: 1,
  },
  {
    img: require('../Assets/Png/payment.png'),
    label: 'Payment detail',
    pressFun: 'Paymentdetail',
    id: 2,
  },
  {
    img: require('../Assets/Png/booking.png'),
    label: 'Booking',
    pressFun: 'Parking',
    id: 3,
  },
  {
    img: require('../Assets/Png/history.png'),
    label: 'History',
    pressFun: 'BookParking',
    id: 4,
  },
  {
    img: require('../Assets/Png/review.png'),
    label: 'App Reviews & Ratings',
    pressFun: 'AppReviewsRatings',
    id: 5,
  },
  {
    img: require('../Assets/Png/report.png'),
    label: 'Share App',
    pressFun: 'ShareApp',
    id: 6,
  },
  {
    img: require('../Assets/Png/share.png'),
    label: 'Report Issue',
    pressFun: 'ReportIssue',
    id: 7,
  },

  {
    img: require('../Assets/Png/host.png'),
    label: 'Become Host',
    pressFun: 'BecomeHost',
    id: 8,
  },
  {
    img: require('../Assets/Png/bookhost.png'),
    label: 'Host Booking',
    pressFun: 'HostBooking',
    id: 9,
  },

  {
    img: require('../Assets/Png/conditions.png'),
    label: 'Terms and Conditions',
    pressFun: 'TermsAndConditions',
    id: 10,
  },
  {
    img: require('../Assets/Png/logout.png'),
    label: 'Logout',
    pressFun: 'Logout',
    id: 11,
  },
];

const CustomDrawerContent = props => {
  const [activeItem, setActiveItem] = useState('Manage Profile');
  const navigation = useNavigation();

  const handlepress = screenName => {
    setActiveItem(screenName);
    props.navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containImg}>
        <View style={styles.profileImg}></View>
        <Text style={[styles.text, {fontWeight: 700, paddingTop: 10}]}>
          Anderson
        </Text>
      </View>

      {DrawerDetails.map((e, i) => {
        return (
          <ScrollView>
            <TouchableOpacity
              onPress={() => handlepress(e.pressFun)}
              key={i}
              style={{
                backgroundColor: activeItem == e.label ? '#FCDC0C' : 'skyblue',
              }}>
              <View style={styles.section} key={i}>
                <Image source={e.img} />
                <Text style={styles.text}>{e.label}</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        );
      })}
    </View>
  );
};

export default CustomDrawerContent;

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
    marginBottom: 20,
  },
  profileImg: {
    width: 60,
    height: 60,
    backgroundColor: 'gray',
    borderRadius: 30,
    borderColor: '#F2B705',
    borderWidth: 3,
  },

  section: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginHorizontal: 15,
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.8)',
  },
});
