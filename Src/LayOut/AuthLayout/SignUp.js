import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import EncryptedStorage from 'react-native-encrypted-storage';
import {FONTS} from '../../Utilities/Fonts';
import {signUp, mobileotpverify} from '../../Services/Services';
import {EMAIL_REGEX, NUMBER} from '../../Utilities/Constants';

const SignUp = () => {
  const navigation = useNavigation();
  const [imageSource, setImageSource] = useState(null);
  const [modal, setModal] = useState(false);

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImageSource({uri: image.path});
        console.log('true');
        setModal(false);
      })
      .catch(e => {
        console.log(e, 'error');
      });
  };

  const openImagePicker = () => {
    ImagePicker.openPicker({
      cropping: true,
      width: 500,
      height: 500,
      cropperCircleOverlay: true,
      mediaType: 'photo',
    })
      .then(image => {
        setModal(false);
        setImageSource({uri: image.path});
      })
      .catch(error => {
        console.log(error);
      });
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Name must be 5 characters long')
      .max(20, 'Too Long!')
      .required('Name cannot be blank'),
    email: Yup.string()
      .min(5, 'Email must be 5 characters long')
      .max(30, 'Too Long!')
      .matches(EMAIL_REGEX, 'Invalid email address')
      .required('Email cannot be blank'),
    mobileNumber: Yup.string()
      .min(5, 'Mobile Number must be 10 characters')
      .max(10, 'Too Long!')
      .required('Mobile Number cannot be blank ')
      .matches(NUMBER, 'Must have numbers'),
    password: Yup.string()
      .min(3, 'Password must be 3 characters long')
      .max(20, 'Password must be 20 characters long')
      .required('Password cannot be blank'),
    confirmPassword: Yup.string()
      .min(3, 'Confirm Password must be 3 characters long')
      .max(20, 'Confirm Password must be 20 characters long')
      .required('Confirm Password cannot be blank'),
  });

  const {handleChange, handleSubmit, errors, values, touched} = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobileNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      handleSignUp(values);
    },
  });

  const handleSignUp = async data => {
    try {
      await EncryptedStorage.setItem(
        'user_session',
        JSON.stringify({
          name: values.name,
          email: values.email,
          mobileNumber: values.mobileNumber,
          password: values.password,
          confirmPassword: values.confirmPassword,
        }),
      );
    } catch (error) {
      console.log('error', error);
    }

    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('mobileNumber', data.mobileNumber);
    formData.append('password', data.password);
    formData.append('confirmPassword', data.confirmPassword);

    signUp(formData)
      .then(res => {
        console.log(res.data);

        if (res.data.status === 1) {
          navigation.navigate('OTP', {
            otp: res.data.refid,
            timer: res.data.remainingseconds,
            email: values.email,
          });
        }
      })
      .catch(err => console.log(err, 'error'));
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.profileImage}>
        {imageSource && (
          <Image
            source={imageSource}
            style={{width: 109, borderRadius: 50, height: 109}}
          />
        )}
        <View style={styles.TakeProfileImg}>
          <TouchableOpacity onPress={() => setModal(!modal)}>
            <Image
              style={styles.setImage}
              source={require('../../Assets/Png/camera.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      {modal ? (
        <View style={styles.modal}>
          <Button
            title="Open Camera"
            onPressButton={openCamera}
            customStyles={styles.Button}
            customStylesText={styles.textBtn}
          />
          <Button
            title="From files"
            onPressButton={openImagePicker}
            customStyles={styles.Button}
            customStylesText={styles.textBtn}
          />
        </View>
      ) : null}

      <View style={styles.containBox}>
        <InputBox
          label="Name"
          placeholder="Enter your Name"
          value={values.name}
          onChangeText={handleChange('name')}
          errors={errors.name && touched.name ? true : null}
          errorText={errors.name}
        />
      </View>

      <View style={styles.containBox}>
        <InputBox
          label="Email"
          placeholder="Enter your Email"
          value={values.email.replace.EMAIL_REGEX}
          onChangeText={handleChange('email')}
          errors={errors.email && touched.email ? true : null}
          errorText={errors.email}
        />
      </View>
      <View style={styles.containBox}>
        <InputBox
          label="Mobile Number"
          placeholder="Enter your Mobile Number"
          value={values.mobileNumber}
          onChangeText={handleChange('mobileNumber')}
          errors={errors.mobileNumber && touched.mobileNumber ? true : null}
          errorText={errors.mobileNumber}
          keyboardType="numeric"
          maxLength={10}
        />
      </View>

      <View style={styles.containBox}>
        <InputBox
          label="Password"
          placeholder="Enter your Password"
          customInputStyles={{position: 'relative'}}
          value={values.password}
          onChangeText={handleChange('password')}
          errors={errors.password && touched.password ? true : null}
          errorText={errors.password}
          setPassword={true}
        />
      </View>

      <View style={styles.containBox}>
        <InputBox
          label="Confirm  Password"
          placeholder="Enter your Confirm  Password"
          secureTextEntry={true}
          value={values.confirmPassword}
          onChangeText={handleChange('confirmPassword')}
          errors={
            errors.confirmPassword && touched.confirmPassword ? true : null
          }
          errorText={errors.confirmPassword}
          setPassword={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Sign up" onPressButton={handleSubmit} />
      </View>
      <Text style={styles.AccountSetup}>Already have an account ?</Text>
      <Text
        onPress={() => navigation.navigate('login')}
        style={styles.AccountCreate}>
        Sign In
      </Text>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 15,
  },
  profileImage: {
    width: 109,
    height: 109,
    backgroundColor: '#E2E2E2',
    borderRadius: 50,
    position: 'relative',
  },
  TakeProfileImg: {
    position: 'absolute',
    left: 75,
    top: 70,
    width: 39,
    height: 39,
    backgroundColor: '#ECA405',
    borderRadius: 20,
  },
  setImage: {
    width: 16,
    height: 13,
    position: 'absolute',
    top: 13,
    left: 12,
  },
  containBox: {
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
  },
  AccountSetup: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16,
    fontFamily: FONTS.Andika.bold,
    alignSelf: 'flex-start',
  },
  AccountCreate: {
    color: '#FC3A3A',
    fontFamily: FONTS.Andika.bold,
    fontSize: 15,
    alignSelf: 'flex-start',
    marginBottom: 30,
  },

  modal: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 1,
    marginTop: 10,
    marginHorizontal: 2,
    borderWidth: 1,
    width: '100%',
    borderColor: 'rgba(0,0,0,0.08)',
  },
  Button: {
    width: 105,
    height: 35,
    backgroundColor: '#ECA405',
  },
  textBtn: {
    fontSize: 11,
    color: 'white',
  },

  modaltext: {
    color: 'white',
    fontSize: 12,
  },
});
