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
            errors={errors.name && touched.name ? true : null}
            errorText={errors.name}
          />
        </View>

        <View style={styles.containBox}>
          <InputBox
            label="Email"
            placeholder="Enter your Email"
            value={values.email}
            onChangeText={handleChange('email')}
            errors={errors.email && touched.email ? true : null}
            errorText={errors.email}
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
    fontFamily: FONTS.Andika.bold,
    alignSelf: 'flex-start',
  },
  AccountCreate: {
    color: '#FC3A3A',
    fontFamily: FONTS.Andika.bold,
    fontSize: 15,
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
