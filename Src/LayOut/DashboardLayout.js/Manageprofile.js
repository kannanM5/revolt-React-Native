import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import DropDown from '../../Components/DropDown';

const Manageprofile = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containImg}>
          <View>
            <Image
              style={styles.profileImg}
              source={require('../../Assets/Png/demo.png')}
            />
          </View>
          <View style={{paddingTop: 2, marginLeft: -105}}>
            <Text
              style={[
                styles.text,
                {fontSize: 13, color: ' rgba(0, 0, 0, 0.6)'},
              ]}>
              Hello
            </Text>
            <Text style={[styles.text, {fontWeight: 700, paddingTop: 0}]}>
              Anderson
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#E7E7E7',
              width: 35,
              height: 35,
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Image
              style={styles.editImage}
              source={require('../../Assets/Png/edit.png')}
            />
          </View>
        </View>
        <InputBox label="Name" placeholder="Bharath Kumar" />
        <InputBox label="Mobile Number" placeholder="Lorum ipsum simple" />
        <InputBox label="Address" placeholder="Test" />
        <InputBox label="City" placeholder="Test" />
        <InputBox label="Pincode" placeholder="956847" />
        <View style={styles.separator}>
          <Text style={styles.separatorText}>Vehicle Details</Text>
          <DropDown
            label="Vehicle Type"
            DefaultName="Select Vehicle"
            dropdownItems={['Auto', 'car', 'Bike']}
          />

          <InputBox label="Vehicle Mode" placeholder="Vehicle mode" />
          <InputBox label="Vehicle Model" placeholder="Vehicle model" />
          <InputBox label="Vehicle Number" placeholder="Vehicle number" />
          <InputBox label="Vehicle Type" placeholder="Vehicle type" />
          <Button customStyles={{marginVertical: 40}} title="Add Vehicle" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Manageprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 20,
  },
  containImg: {
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#F2B705',
    borderWidth: 4,
  },
  editImage: {
    width: 15,
    height: 15,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    marginHorizontal: 15,
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  separator: {
    marginTop: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  separatorText: {
    fontSize: 21,
    fontWeight: 700,
    color: 'black',
    paddingVertical: 7,
  },
  containerList: {
    elevation: 1,
  },

  dropdownButton: {
    width: '100%',
    height: 51,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    elevation: 2,
    paddingLeft: 20,
    fontSize: 14,
    backgroundColor: '#ffffff',
    color: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownItem: {
    width: '100%',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    paddingLeft: 20,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    color: 'rgba(0, 0, 0, 0.6)',
    elevation: 2,
  },
  upDown: {
    width: 12,
    height: 12,
    marginRight: 20,
  },
  label: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 700,
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingTop: 10,
  },
});
