import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import DropDown from '../../Components/DropDown';
import Button from '../../Components/Button';
import SubHeader from '../../Components/SubHeader';

const ReportIssue = ({navigation}) => {
  return (
    <>
      <SubHeader titleName="Report Issue" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <InputBox
          placeholder="Station Name"
          label="Location Name"
          customInputStyles={{marginBottom: 12}}
        />
        <DropDown
          label="Incident Type"
          DefaultName="Type your custum message here"
          customStyles={{height: 160}}
          customStylesDefaultText={{alignSelf: 'flex-start', marginTop: 10}}
          customImgStyle={{alignSelf: 'flex-start', marginTop: 19}}
        />
        <Button title="rEPORT ISSUE" customStyles={{marginVertical: 30}} />
      </View>
    </>
  );
};

export default ReportIssue;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    paddingVertical: 20,
  },
});
