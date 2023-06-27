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

const SignUp = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
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
      .max(20, 'Too Long!')
      .required('Email cannot be blank'),
    password: Yup.string()
      .min(5, 'Password must be 5 characters long')
      .max(20, 'Password must be 20 characters long')
      .required('Password cannot be blank'),
    confirmPassword: Yup.string()
      .min(5, 'Confirm Password must be 5 characters long')
      .max(20, 'Confirm Password must be 20 characters long')
      .required('Confirm Password cannot be blank'),
    // .matches(/[0-9]/, 'Password requires a number')
    // .matches(/[a-z]/, 'Password requires a lowercase letter')
    // .matches(/[A-Z]/, 'Password requires an uppercase letter')
    // .matches(/[^\w]/, '*Password requires a symbol'),
  });

  const {handleChange, handleSubmit, errors, values, touched} = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      handleSignUp(values);
    },
  });

  const handleSignUp = data => {
    console.log(data.email, data.password, data.name, data.confirmPassword);
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%', height: 2000}}>
        {modal ? (
          <View style={styles.modal}>
            <TouchableOpacity onPress={openCamera}>
              <View style={styles.modalBox}>
                <Text style={styles.modaltext}>Open Camera</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={openImagePicker}>
              <View style={styles.modalBox}>
                <Text style={styles.modaltext}>From files</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
        <View style={styles.containBox}>
          <InputBox
            label="Name"
            placeholder="Enter your Name"
            value={values.name}
            onChangeText={handleChange('name')}
          />
        </View>
        {errors.name && touched.name ? (
          <Text style={styles.error}>{errors.name}</Text>
        ) : null}

        <View style={styles.containBox}>
          <InputBox
            label="Email"
            placeholder="Enter your Email"
            value={values.email}
            onChangeText={handleChange('email')}
          />
        </View>
        {errors.email && touched.email ? (
          <Text style={styles.error}>{errors.email}</Text>
        ) : null}

        <View style={styles.containBox}>
          <InputBox
            label="Password"
            placeholder="Enter your Password"
            secureTextEntry={showPassword ? false : true}
            value={values.password}
            onChangeText={handleChange('password')}
          />
          {showPassword ? (
            <TouchableOpacity onPress={handlePassword} style={styles.eyeBtn}>
              <Image
                style={styles.eye}
                source={require('../../Assets/Png/eye.png')}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handlePassword} style={styles.eyeBtn}>
              <Image
                style={styles.eye}
                source={require('../../Assets/Png/eye1.png')}
              />
            </TouchableOpacity>
          )}
        </View>
        {errors.password && touched.password ? (
          <Text style={styles.error}>{errors.password}</Text>
        ) : null}

        <View style={styles.containBox}>
          <InputBox
            label="Confirm  Password"
            placeholder="Enter your Confirm  Password"
            secureTextEntry={true}
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
          />
        </View>
        {errors.confirmPassword && touched.confirmPassword ? (
          <Text style={styles.error}>{errors.confirmPassword}</Text>
        ) : null}

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
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 25,
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
    marginBottom: 5,
  },
  buttonContainer: {
    width: '100%',
  },
  AccountSetup: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16,
    fontWeight: 700,
    marginVertical: 8,
    alignSelf: 'flex-start',
  },
  AccountCreate: {
    color: '#FC3A3A',
    fontWeight: 700,
    fontSize: 15,
    alignSelf: 'flex-start',
  },
  error: {
    color: 'red',
    fontSize: 14,
    margin: 0,
    alignSelf: 'flex-start',
  },
  eye: {
    position: 'absolute',
    width: 25,
    height: 16,
    zIndex: 99,
  },
  eyeBtn: {
    position: 'absolute',
    top: 60,
    right: 40,
  },
  error: {
    color: 'red',
    fontSize: 14,
    margin: 0,
    alignSelf: 'flex-start',
  },
  modal: {
    flex: 1,
    backgroundColor: '#ECA405',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 5,
    marginVertical: 6,
  },
  modalBox: {
    backgroundColor: '#FFFF',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 15,
  },
  modaltext: {
    color: 'black',
    fontSize: 12,
  },
});
