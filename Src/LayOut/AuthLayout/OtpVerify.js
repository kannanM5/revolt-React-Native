import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import DeviceInfo from 'react-native-device-info';
import {resendotpverify, mobileotpverify} from '../../Services/Services';
import {useDispatch, useSelector} from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';
import {storeToken} from '../../Methods';
import {setToken} from '../../Store/Slices/AuthSlice';
import {setAuthCode} from '../../Store/Slices/AuthSlice';

const OtpVerify = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const otp = route.params.otp;
  const timer = route.params.timer;
  const email = route.params.email;
  const [time, setTime] = useState(timer);
  const deviceId = DeviceInfo.getDeviceId();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);

  useEffect(() => {
    const countDown = setInterval(() => {
      setTime(prevTimer => prevTimer - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(countDown);
    }

    return () => {
      clearInterval(countDown);
    };
  }, [time]);

  const {handleChange, handleSubmit, errors, values, touched, setFieldValue} =
    useFormik({
      initialValues: {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        otp_code: null,
        refid: otp,
        devicetype: 1,
        deviceid: deviceId,
      },
      onSubmit: values => {
        OtpVerify(values);
      },
    });

  const OtpVerify = async data => {
    let formData = new FormData();
    let password = parseInt(
      data.value1 + data.value2 + data.value3 + data.value4,
    );
    formData.append('refid', data.refid);
    formData.append('otp_code', password);
    formData.append('devicetype', data.devicetype);
    formData.append('deviceid', data.deviceid);

    console.log(formData);

    mobileotpverify(formData)
      .then(res => {
        console.log(res.data);
        if (res.data.status === 1) {
          navigation.navigate('BottomTabNavigation');
          storeToken(res.data.token, dispatch);

          console.log('data got from api response', res.data);
        } else {
          console.log('error');
        }
      })
      .catch(err => console.log(err, 'error'));
  };

  const handleRequestAgain = data => {
    let formData = new FormData();
    // formData.append('resendOtp', otp);
    // console.log(formData);
    // resendotpverify(formData)
    //   .then(res => {
    //     console.log(res.data);
    //     // if (res.data.status === 1) {
    //     // if (time === 0) {
    //     // setFieldValue('resendOtp', res.data.refid);
    //     // setTimeout(() => {
    //     //   setTime(297);
    //     //   console.log('resend again', formData);
    //     // }, 3000);
    //     // }
    //     // }
    //     //  else {
    //     //   console.log('else error');
    //     // }
    //   })
    //   .catch(err => console.log(err, 'error'));
  };

  return (
    <ScrollView>
      <>
        <SubHeader
          titleName="OTP"
          onPress={() => navigation.goBack()}
          customStyles={{marginBottom: -10}}
        />
        <View style={styles.container}>
          <Image
            style={styles.optImage}
            source={require('../../Assets/Png/opt.png')}
          />
          <Text style={styles.titleName}>Verification Code</Text>
          <Text style={styles.titleContent}>
            We send a verification code to
            <Text style={styles.email}> {email}</Text>
          </Text>
          <View style={styles.containBox}>
            <InputBox
              placeholder="0"
              customInputStyles={styles.input}
              placeholderTextColor={styles.placeholdercolor}
              value={values.value1}
              onChangeText={handleChange('value1')}
              maxLength={1}
              keyboardType="numeric"
            />
            <InputBox
              placeholder="1"
              customInputStyles={styles.input}
              placeholderTextColor={styles.placeholdercolor}
              value={values.value2}
              onChangeText={handleChange('value2')}
              maxLength={1}
              keyboardType="numeric"
            />
            <InputBox
              placeholder="2"
              customInputStyles={styles.input}
              placeholderTextColor={styles.placeholdercolor}
              value={values.value3}
              onChangeText={handleChange('value3')}
              maxLength={1}
              keyboardType="numeric"
            />
            <InputBox
              placeholder="8"
              customInputStyles={styles.input}
              placeholderTextColor={styles.placeholdercolor}
              value={values.value4}
              onChangeText={handleChange('value4')}
              maxLength={1}
              keyboardType="numeric"
            />
          </View>

          {time ? (
            <Text style={styles.timer}>{time} Secs remaining</Text>
          ) : null}

          <View style={styles.buttonContainer}>
            <Button title="Submit" onPressButton={handleSubmit} />
          </View>
          <View style={styles.footer}>
            <Text style={styles.AccountSet}>Don’t receive code?</Text>
            <Text
              style={styles.AccountSetup}
              onPress={handleRequestAgain}
              // onPress={handleSubmit}
            >
              Request again
            </Text>
          </View>
        </View>
      </>
    </ScrollView>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 25,
  },
  optImage: {
    width: 259,
    height: 240,
  },
  titleName: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: FONTS.Andika.bold,
  },
  titleContent: {
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.6)',
    width: 250,
    paddingBottom: 10,
    fontFamily: FONTS.Andika.regular,
  },
  email: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontFamily: FONTS.Andika.bold,
    fontSize: 12,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 5,
    marginTop: -8,
  },
  containBox: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 210,
  },
  footer: {
    flexDirection: 'row',
  },
  AccountSet: {
    fontSize: 16,
    fontFamily: FONTS.Andika.regular,
  },

  AccountSetup: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16,
    fontFamily: FONTS.Andika.bold,
    marginHorizontal: 5,
  },
  input: {
    color: '#3D5DF1',
    fontFamily: FONTS.Andika.bold,
    fontSize: 15,
    marginTop: 5,
  },
  placeholdercolor: {
    color: '#3D5DF1',
  },
  timer: {
    color: 'red',
    fontFamily: FONTS.Andika.bold,
    fontSize: 15,
  },
});
