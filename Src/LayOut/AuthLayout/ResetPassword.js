import {ScrollView, StyleSheet, Text, View, Image, Alert} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import InputBox from '../../Components/InputBox';
import {FONTS} from '../../Utilities/Fonts';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useNavigation, useRoute} from '@react-navigation/native';
import {verifyresetpassword} from '../../Services/Services';

const ResetPassword = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const refid = route.params.refid;

  const SignupSchema = Yup.object().shape({
    newpassword: Yup.string().required('password cannot be blank'),
    confirmpassword: Yup.string().required('Confirm password cannot be blank'),
  });

  const {handleChange, handleSubmit, errors, values, touched} = useFormik({
    initialValues: {
      newpassword: '',
      confirmpassword: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      handleResetPassword(values);
    },
  });

  const handleResetPassword = data => {
    let formData = new FormData();
    formData.append('newpassword', data.newpassword);
    formData.append('confirmpassword', data.confirmpassword);
    formData.append('refid', refid);
    formData.append(
      'otp',
      data.input1 + data.input2 + data.input3 + data.input4,
    );
    console.log(formData);
    verifyresetpassword(formData)
      .then(res => {
        console.log(res.data);

        if (res.data.status === 0) {
          Alert.alert('Error', res.data.msg);
          return;
        }
      })
      .catch(err => console.log(err, 'error'));
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titleName}>Reset Password?</Text>
        <Text style={styles.titleContent}>
          Your new password must be different from previous used password
        </Text>
        <Image
          style={styles.forgotImage}
          source={require('../../Assets/Png/Group223.png')}
        />
        <View style={styles.containBox}>
          <InputBox
            label="New Password"
            placeholder="Enter your New Password"
            setPassword={true}
            value={values.newpassword}
            onChangeText={handleChange('newpassword')}
          />
        </View>
        <View style={styles.containBox}>
          <InputBox
            label="Confirm Password"
            placeholder="Enter your New Password"
            setPassword={true}
            value={values.confirmpassword}
            onChangeText={handleChange('confirmpassword')}
          />
        </View>
        <Button
          title="Reset Password"
          customStyles={{
            height: 45,
            width: '100%',
          }}
          onPressButton={handleSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default ResetPassword;

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
    width: 102,
    height: 125,
    margin: 25,
  },
  containBox: {
    width: '100%',
    marginBottom: 8,
  },
});
