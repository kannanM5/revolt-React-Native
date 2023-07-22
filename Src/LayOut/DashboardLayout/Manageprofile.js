import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  RefreshControl,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';
import {useDispatch, useSelector} from 'react-redux';
import {
  getmyprofile,
  updatemyprofile,
  deleteuser,
} from '../../Services/Services';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {setProfileArr} from '../../Store/Slices/ProfileSlice';
import ImagePicker from 'react-native-image-crop-picker';
import {FILESBASEURL, trimString} from '../../Utilities/Constants';
import Loader from '../AuthLayout/Loader';
import {removeToken} from '../../Utilities/Methods';

const Manageprofile = ({navigation}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const Profile = useSelector(state => state.profile.profileArr);
  const myToken = useSelector(state => state.auth.token);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleGetMyProfile();
  }, []);

  const {values, handleChange, handleSubmit, setValues, setFieldValue} =
    useFormik({
      initialValues: {
        name: Profile.name,
        address: '',
        city: '',
        pincode: '',
        profile_image: {},
        mobile: Profile.mobile,
      },
      onSubmit: values => {
        handleUpdateMyProfile(values);
      },
    });

  const handleGetMyProfile = () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('token', myToken);
    getmyprofile(formData)
      .then(res => {
        if (res.data.status === 1) {
          let refData = res.data.profile;
          setValues({
            ...values,
            name: refData.name,
            address: refData.address,
            city: refData.city,
            pincode: refData.pincode,
            profile_image: refData.profile_image,
            mobile: refData.mobile,
          });
          dispatch(setProfileArr(refData));
        }
      })
      .catch(error => console.log(error, 'getProfile'))
      .finally(() => setIsLoading(false));
  };

  const handleUpdateMyProfile = data => {
    const formData = new FormData();
    formData.append('token', myToken);
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('pincode', data.pincode);
    formData.append('profile_image', data.profile_image.uri);
    formData.append('mobile', data.mobile);

    updatemyprofile(formData)
      .then(res => {
        if (res.data.status === 1) {
          // console.log('log', data.profile_image);
          dispatch(
            setProfileArr({
              ...Profile,
              name: data.name,
              address: data.address,
              city: data.city,
              pincode: data.pincode,
              profile_image: data.profile_image.uri,
              mobile: data.mobile,
              Id_tag: data.Id_tag,
            }),
          );
          console.log('handleSucess');
        }
      })
      .catch(error => console.log(error, 'updateprofile Error'));
  };

  const handleDeleteUserPopup = id => {
    Alert.alert('Delete Account', 'Are you sure to delete this account?', [
      {
        text: 'Cancel',
        onPress: () => console.log('cancelled'),
        style: 'cancel',
      },
      {text: 'DELETE', onPress: () => handleDeleteUser()},
    ]);
  };

  const handleDeleteUser = () => {
    const formData = new FormData();
    formData.append('token', myToken);
    deleteuser(formData)
      .then(res => {
        if (res.data.status === 1) {
          removeToken(dispatch);
          console.log('Successfully deleted');
        }
      })
      .catch(err => console.log(err, 'error'));
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const openImagePicker = () => {
    ImagePicker.openPicker({
      cropping: true,
      width: 500,
      height: 500,
      cropperCircleOverlay: true,
      mediaType: 'photo',
      forceJpg: true,
    })
      .then(image => {
        setFieldValue('profile_image', {uri: image.path});
        console.log('imagePicker');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={{flex: 1}}>
      <SubHeader
        titleName="Manage Profile"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor={'white'}
            colors={['#FCDC0C']}
          />
        }>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.containImg}>
              <View>
                <TouchableOpacity activeOpacity={0.7} onPress={openImagePicker}>
                  <Image
                    style={styles.profileImg}
                    source={{
                      uri:
                        values.profile_image.uri ||
                        FILESBASEURL + Profile.profile_image,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{paddingTop: 2, marginLeft: -105}}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 13,
                      color: ' rgba(0, 0, 0, 0.6)',
                      fontFamily: FONTS.Andika.bold,
                      marginBottom: -6,
                      marginLeft: 18,
                    },
                  ]}>
                  Hello
                </Text>
                <Text style={styles.text}> {Profile?.name}</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#E7E7E7',
                  width: 35,
                  height: 35,
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <Image
                  style={styles.editImage}
                  source={require('../../Assets/Png/edit.png')}
                />
              </View>
            </View>
            <InputBox
              label="Name"
              placeholder="Bharath Kumar"
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <InputBox
              label="Mobile Number"
              placeholder="9876543210"
              value={values.mobile}
              onChangeText={handleChange('mobile')}
              maxLength={10}
              keyboardType="numeric"
            />
            <InputBox
              label="Address"
              placeholder="Test"
              value={values.address}
              onChangeText={handleChange('address')}
            />
            <InputBox
              label="City"
              placeholder="Test"
              value={values.city}
              onChangeText={handleChange('city')}
            />
            <InputBox
              label="Pincode"
              placeholder="956847"
              value={values.pincode}
              onChangeText={handleChange('pincode')}
              maxLength={6}
              keyboardType="numeric"
            />

            <Button
              customStyles={{marginBottom: 6, height: 40}}
              title="Update profile"
              onPressButton={handleSubmit}
            />

            <Button
              customStyles={{height: 40, marginBottom: 6}}
              title="Manage Vehicle"
              onPressButton={() => navigation.navigate('ManageVehicle')}
            />

            <Button
              customStyles={{
                marginBottom: 20,
                backgroundColor: 'red',
                height: 40,
              }}
              title="Delete Account"
              onPressButton={handleDeleteUserPopup}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Manageprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 60,
  },
  containImg: {
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#F2B705',
    borderWidth: 4,
  },
  editImage: {
    width: 15,
    height: 15,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    marginHorizontal: 15,
    color: 'rgba(0, 0, 0, 0.8)',
    fontFamily: FONTS.Andika.bold,
  },
  separator: {
    marginTop: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  separatorText: {
    fontSize: 21,
    color: 'black',
    paddingVertical: 7,
    fontFamily: FONTS.Andika.bold,
  },
  containerList: {
    elevation: 1,
  },

  dropdownButton: {
    width: '100%',
    height: 51,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    elevation: 2,
    paddingLeft: 20,
    fontSize: 14,
    backgroundColor: '#ffffff',
    color: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownItem: {
    width: '100%',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    paddingLeft: 20,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    color: 'rgba(0, 0, 0, 0.6)',
    elevation: 2,
  },
  upDown: {
    width: 12,
    height: 12,
    marginRight: 20,
  },
  label: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 700,
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingTop: 10,
  },
});
