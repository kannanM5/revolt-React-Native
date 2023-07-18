import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import InputBox from '../../Components/InputBox';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {FONTS} from '../../Utilities/Fonts';
import {forgotpassword} from '../../Services/Services';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email cannot be blank'),
  });

  const {handleChange, handleSubmit, errors, values} = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      handleforgotpassword(values);
    },
  });

  const handleforgotpassword = data => {
    let formData = new FormData();
    formData.append('email', data.email);

    forgotpassword(formData)
      .then(res => {
        if (res.data.status === 1) {
          navigation.navigate('ResetPassword', {
            refid: res.data.refid,
            timer: res.data.remainingseconds,
            email: data.email,
          });
        }
      })
      .catch(error => console.log(error, 'error'));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titleName}>Forgot Your Password?</Text>
        <Text style={styles.titleContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.
        </Text>
        <Image
          style={styles.forgotImage}
          source={require('../../Assets/Png/Group222.png')}
        />
        <View style={styles.containBox}>
          <InputBox
            label="Email"
            placeholder="Enter your Email"
            errors={errors.email ? true : null}
            errorText={errors.email}
            value={values.email}
            onChangeText={handleChange('email')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Submit"
            customStyles={{
              height: 45,
              width: 130,
              borderRadius: 20,
            }}
            onPressButton={handleSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 50,
  },
  titleName: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: FONTS.Andika.bold,
  },
  titleContent: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    width: 225,
    lineHeight: 19,
    fontFamily: FONTS.Andika.regular,
  },
  forgotImage: {
    width: 162,
    height: 142,
    margin: 25,
  },
  containBox: {
    width: '100%',
    marginBottom: 5,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
