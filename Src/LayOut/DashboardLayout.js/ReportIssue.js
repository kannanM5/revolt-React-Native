import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import DropDown from '../../Components/DropDown';
import Button from '../../Components/Button';

const ReportIssue = () => {
  return (
    <View style={styles.container}>
      <InputBox
        placeholder="Station Name"
        label="Location Name"
        customInputStyles={{marginBottom: 12}}
      />
      <DropDown
        label="Incident Type"
        DefaultName="Type your custum message here"
      />
      <Button title="rEPORT ISSUE" customStyles={{marginVertical: 100}} />
    </View>
  );
};

export default ReportIssue;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    paddingVertical: 20,
  },
});
