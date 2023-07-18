import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import SubHeader from '../../Components/SubHeader';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {updatewallet} from '../../Services/Services';
import {setWalletAmount} from '../../Store/Slices/WalletSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useToken} from '../../Utilities/Constants';

const AddMoney = ({navigation, route}) => {
  const myToken = useToken();
  const balanceAmount = useSelector(state => state.wallet.walletAmount);
  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    amount: Yup.string()
      .min(1, 'Amount must be 1 digits long')
      .max(7, 'Too Long!')
      .required('Amount cannot be blank'),
  });

  const {handleChange, handleSubmit, touched, errors, values} = useFormik({
    initialValues: {
      amount: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      updateAmount(values);
    },
  });

  const updateAmount = data => {
    const formData = new FormData();
    formData.append('amount', data.amount);
    formData.append('token', myToken);
    updatewallet(formData)
      .then(res => {
        if (res.data.status === 1) {
          navigation.goBack('WALLET');

          const digits = Number(data.amount) + Number('.00');
          dispatch(setWalletAmount(Number(balanceAmount) + digits + '.00'));
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <>
      <SubHeader titleName="Add Money" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Image
          style={styles.walletImage}
          source={require('../../Assets/Png/addMoney.png')}
        />
        <View style={styles.containBox}>
          <InputBox
            placeholder="Enter Amount"
            value={values.amount}
            onChangeText={handleChange('amount')}
            errors={errors.amount && touched.amount ? true : null}
            errorText={errors.amount}
            keyboardType="numeric"
            maxLength={7}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Submit"
            customStyles={styles.button}
            onPressButton={handleSubmit}
          />
        </View>
      </View>
    </>
  );
};

export default AddMoney;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 40,
  },
  walletImage: {
    width: 187,
    height: 149,
  },
  containBox: {
    width: '100%',
    marginTop: 15,
    marginBottom: 5,
  },
  button: {
    borderRadius: 50,
  },
  buttonContainer: {
    width: 157,
    marginBottom: 10,
  },
});
