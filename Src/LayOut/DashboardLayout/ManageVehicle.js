import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import SubHeader from '../../Components/SubHeader';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {FONTS} from '../../Utilities/Fonts';
import {
  addvehicle,
  listvehicle,
  deletevehicle,
  editvehicle,
} from '../../Services/Services';
import {COLORS} from '../../Utilities/Colors';
import {useToken} from '../../Utilities/Constants';
import Toast from 'react-native-simple-toast';

const ManageVehicle = ({navigation}) => {
  const myToken = useToken();
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dataArr, setDataArr] = useState([]);

  const arr = [
    {label: 'car', id: 1},
    {label: 'Bike', id: 2},
    {label: 'Auto', id: 3},
  ];

  const SignupSchema = Yup.object().shape({
    vehicle_type: Yup.string().required('Field cannot be blank'),
    vehicle_model: Yup.string().required('Field cannot be blank'),
    vehicle_number: Yup.string().required('Field cannot be blank'),
    vehicle_make: Yup.string().required('Field cannot be blank'),
  });

  const {values, handleChange, handleSubmit, errors, touched, resetForm} =
    useFormik({
      initialValues: {
        token: myToken,
        vehicle_make: '',
        vehicle_type: '',
        vehicle_model: '',
        vehicle_number: '',
      },
      onSubmit: values => {
        handleAddVehicle(values);
      },
      validationSchema: SignupSchema,
    });

  const handleAddVehicle = data => {
    const formData = new FormData();
    formData.append('token', data.token);
    formData.append('vehicle_make', data.vehicle_make);
    formData.append('vehicle_model', data.vehicle_model);
    formData.append('vehicle_number', data.vehicle_number);

    const selectedOption = arr.find(e => e.label === data.vehicle_type);
    formData.append('vehicle_type', selectedOption ? selectedOption.id : null);

    addvehicle(formData)
      .then(res => {
        if (res.data.status === 1) {
          console.log(res);
          Toast.show('Succesfully add the vehicle');

          handleListVehicle();
          setIsShow(false);
          resetForm();
        } else {
          console.log('error else ihh');
        }
      })
      .catch(err => console.log(err, 'error'));
  };

  const handleSelectOption = option => {
    handleChange('vehicle_type')(option.label);
    setIsOpen(false);
  };

  useEffect(() => {
    handleListVehicle();
  }, []);

  const handleListVehicle = () => {
    const formData = new FormData();
    formData.append('token', myToken);
    listvehicle(formData)
      .then(res => {
        if (res.data.status) {
          let refData = res.data.list_vehicles;
          setDataArr(refData);
        }
      })
      .catch(err => console.log(err, 'error'));
  };

  const handleDeleteVehiclePopup = id => {
    Alert.alert('Delete Vehicle', 'Are you sure to delete this vehicle?', [
      {
        text: 'Cancel',
        onPress: () => console.log('cancelled'),
        style: 'cancel',
      },
      {text: 'DELETE', onPress: () => handleDeleteVehicle(id)},
    ]);
  };

  const handleDeleteVehicle = id => {
    const formData = new FormData();
    formData.append('token', myToken);
    formData.append('vehicle_id', id);
    deletevehicle(formData)
      .then(res => {
        if (res.data.status === 1) {
          arr.splice(id, 1);
          handleListVehicle();
        }
      })
      .catch(err => console.log(err, 'error'));
  };

  const handleEditVehicle = item => {
    setIsShow(true);

    const formData = new FormData();
    formData.append('token', myToken);
    formData.append('vehicle_id', item.vehicle_id);
    formData.append('vehicle_type', item.vehicle_type);
    formData.append('vehicle_make', item.vehicle_make);
    formData.append('vehicle_model', item.vehicle_model);
    formData.append('vehicle_number', item.vehicle_number);

    editvehicle(formData)
      .then(res => {
        if (res.data.status) {
          console.log('editVehcle');
        }
      })
      .catch(err => console.log(err, 'error'));
  };

  return (
    <View style={{flex: 1}}>
      <SubHeader
        titleName="Manage Vehicle"
        onPress={() => navigation.goBack()}
        show={true}
        handlepress={() => setIsShow(!isShow)}
      />
      <View style={styles.container}>
        {isShow ? (
          <View>
            <TouchableOpacity
              style={{position: 'relative', backgroundColor: 'white'}}
              activeOpacity={0.7}
              onPress={() => setIsOpen(!isOpen)}>
              <InputBox
                label="Vehicle Type"
                placeholder="Vehicle type"
                value={values.vehicle_type}
                onChangeText={handleChange('vehicle_type')}
                // errors={
                //   errors.vehicle_type && touched.vehicle_type ? true : null
                // }
                // errorText={errors.vehicle_type}
              />

              <Image
                style={styles.upDown}
                source={
                  isOpen
                    ? require('../../Assets/Png/up.png')
                    : require('../../Assets/Png/down.png')
                }
              />
            </TouchableOpacity>
            {isOpen && (
              <FlatList
                data={arr}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        handleSelectOption(item);
                      }}>
                      <Text style={styles.dropdownItem}>{item.label}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            )}
            <InputBox
              label="Vehicle Mode"
              placeholder="Vehicle mode"
              value={values.vehicle_make}
              onChangeText={handleChange('vehicle_make')}
              errors={errors.vehicle_make && touched.vehicle_make ? true : null}
              errorText={errors.vehicle_make}
            />
            <InputBox
              label="Vehicle Model"
              placeholder="Vehicle model"
              value={values.vehicle_model}
              onChangeText={handleChange('vehicle_model')}
              errors={
                errors.vehicle_model && touched.vehicle_model ? true : null
              }
              errorText={errors.vehicle_model}
            />
            <InputBox
              label="Vehicle Number"
              placeholder="Vehicle number"
              value={values.vehicle_number}
              onChangeText={handleChange('vehicle_number')}
              errors={
                errors.vehicle_number && touched.vehicle_number ? true : null
              }
              errorText={errors.vehicle_number}
            />
            <Button
              customStyles={{marginVertical: 20, height: 40}}
              title="ADD VEHICLE"
              onPressButton={handleSubmit}
            />
          </View>
        ) : (
          <View style={{marginBottom: 70, marginTop: 5}}>
            <FlatList
              data={dataArr}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <Text style={styles.noData}>No data found</Text>
              }
              renderItem={({item}) => (
                <View
                  style={{
                    height: 80,
                    elevation: 2,
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.05)',
                    backgroundColor: '#FFFFFF',
                    marginTop: 5,
                    marginBottom: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    alignItems: 'center',
                  }}>
                  <View>
                    {/* <Image source={{uri: dataArr.url}} /> */}

                    <Text style={styles.text}>{item.vehicle_id}</Text>
                    <Text style={styles.text}>{item.vehicle_make}</Text>
                    <Text style={styles.text}>{item.vehicle_number}</Text>
                  </View>

                  <View style={{}}>
                    <TouchableOpacity
                      onPress={() => handleEditVehicle(item)}
                      style={styles.updateBtn}>
                      <Text style={styles.updateBtnText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.updateBtn}
                      onPress={() => handleDeleteVehiclePopup(item.vehicle_id)}>
                      <Text style={styles.updateBtnText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}></FlatList>
          </View>
        )}
      </View>
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
  input: {
    width: '100%',
    height: 51,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: COLORS.borderColor,
    elevation: 2,
    paddingLeft: 20,
    fontSize: 14,
    fontFamily: FONTS.Andika.regular,
    backgroundColor: COLORS.white,
    position: 'relative',
    backgroundColor: 'white',
  },
  label: {
    fontSize: 15,
    color: COLORS.labelColor,
    alignItems: 'flex-start',
    paddingBottom: 3,
    paddingTop: 5,
    fontFamily: FONTS.Andika.bold,
  },
  error: {
    color: COLORS.red,
    fontSize: 13,
    alignSelf: 'flex-start',
    fontFamily: FONTS.Andika.regular,
    opacity: 0.7,
    marginBottom: -10,
  },
  upDown: {
    width: 12,
    height: 12,
    marginRight: 20,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 56,
    right: 10,
    paddingVertical: 9,
    paddingHorizontal: 9,
  },
  dropdownItem: {
    borderColor: COLORS.borderColor,
    paddingLeft: 20,
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    color: COLORS.transparentDimColor,
    elevation: 2,
  },
  text: {
    fontSize: 16,
  },
  updateBtn: {
    backgroundColor: '#F2CC0C',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  updateBtnText: {
    fontSize: 12,
    fontFamily: FONTS.Andika.bold,
  },
});
