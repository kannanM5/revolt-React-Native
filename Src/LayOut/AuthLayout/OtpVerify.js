import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
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

const OtpVerify = ({navigation, route}) => {
  const refid = route.params.otp;
  const timer = route.params.timer;
  const email = route.params.email;
  const [time, setTime] = useState(timer);
  const deviceId = DeviceInfo.getDeviceId();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);

  const inputRefs = useRef([]);
  const fieldNames = ['value1', 'value2', 'value3', 'value4'];

  const handleTextChange = (index, text) => {
    if (text.length === 1 && index < fieldNames.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const inputBoxRefs = (ref, index) => {
    inputRefs.current[index] = ref;
  };

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
      },
      onSubmit: values => {
        handleOtpVerify(values);
      },
    });

  const handleOtpVerify = data => {
    let formData = new FormData();
    let otp = parseInt(data.value1 + data.value2 + data.value3 + data.value4);
    formData.append('refid', refid);
    formData.append('otp_code', otp);
    formData.append('devicetype', 1);
    formData.append('deviceid', deviceId);

    console.log(formData);

    mobileotpverify(formData)
      .then(res => {
        console.log(res.data);
        if (res.data.status === 1) {
          storeToken(res.data.token, dispatch);

          console.log('data got from api response', res.data);
        }
      })
      .catch(err => console.log(err, 'error'));
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
            {fieldNames.map((fieldName, index) => (
              <TextInput
                key={index}
                style={styles.input}
                ref={ref => inputBoxRefs(ref, index)}
                placeholder="0"
                maxLength={1}
                keyboardType="numeric"
                onChangeText={text => {
                  handleChange(fieldName)(text);
                  handleTextChange(index, text);
                }}
                value={values[fieldName]}
              />
            ))}
          </View>

          {time ? (
            <Text style={styles.timer}>{time} Secs remaining</Text>
          ) : null}

          <View style={styles.buttonContainer}>
            <Button title="Submit" onPressButton={handleSubmit} />
          </View>
          <View style={styles.footer}>
            <Text style={styles.AccountSet}>Don’t receive code?</Text>
            <Text style={styles.AccountSetup}>Request again</Text>
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
    width: 50,
    height: 46,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: 'white',
    marginRight: 5,
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
