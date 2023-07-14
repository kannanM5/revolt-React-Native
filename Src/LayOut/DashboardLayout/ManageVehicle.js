import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import DropDown from '../../Components/DropDown';
import SubHeader from '../../Components/SubHeader';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useSelector} from 'react-redux';
import {FONTS} from '../../Utilities/Fonts';
import {addvehicle} from '../../Services/Services';

const ManageVehicle = ({navigation}) => {
  const myToken = useSelector(state => state.auth.token);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const arr = [
    {label: 'Auto', id: 1},
    {label: 'car', id: 2},
    {label: 'Bike', id: 3},
  ];

  const handleSelectItem = myArr => {
    // console.log(myArr, 'jihuh');
    // let item = myArr.map(e => e);
    // console.log(item);

    setIsOpen(false);
  };

  const {values, handleChange, handleSubmit, setValues, setFieldValue} =
    useFormik({
      initialValues: {
        token: myToken,
        vehicle_type: null,
        vehicle_make: '',
        vehicle_model: '',
        vehicle_number: '',
      },
      onSubmit: values => {
        handleUpdateMyProfile(values);
      },
    });
  return (
    <View style={{flex: 1}}>
      <SubHeader
        titleName="Manage Vehicle"
        onPress={() => navigation.goBack()}
        customStyles={{position: 'relative'}}
        show={true}
        handlepress={() => setShow(!show)}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {show ? (
          <View>
            <DropDown
              label="Vehicle Type"
              DefaultName="Select Vehicle"
              dropdownItems={arr}
              onPress={() => handleSelectItem(arr)}
            />

            <InputBox label="Vehicle Make" placeholder="Vehicle model" />
            <InputBox label="Vehicle Number" placeholder="Vehicle number" />
            <InputBox label="Vehicle Type" placeholder="Vehicle type" />

            <Button
              customStyles={{marginVertical: 20, height: 40}}
              title="ADD VEHICLE"
            />
          </View>
        ) : (
          <Text style={styles.noData}>No data found</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default ManageVehicle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
  noData: {
    fontFamily: FONTS.Andika.regular,
    fontSize: 18,
    textAlign: 'center',
  },
});
