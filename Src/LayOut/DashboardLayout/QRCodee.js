import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from './Header';
import {DrawerActions} from '@react-navigation/native';
import {FONTS} from '../../Utilities/Fonts';
import Button from '../../Components/Button';
import InputBox from '../../Components/InputBox';

const QRCodee = ({navigation}) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleOPenDrawer = () => {
    navigation.openDrawer();
    // navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const openChandleOpencamera = e => {
    setIsCameraOpen(true);
    console.log(isCameraOpen, 'isCameraOpen');
  };

  return (
    <>
      <Header
        defaultSource={require('../../Assets/Png/menu.png')}
        onPress={handleOPenDrawer}
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Scan To Start Session</Text>
        <Image
          source={require('../../Assets/Png/qrcode.png')}
          style={styles.image}
        />

        <View style={{flexDirection: 'row'}}>
          <View style={styles.imgContainer}>
            <Image source={require('../../Assets/Png/message.png')} />
          </View>
          <View style={styles.imgContainer}>
            <Image source={require('../../Assets/Png/printer.png')} />
          </View>
          <View style={styles.imgContainer}>
            <Image source={require('../../Assets/Png/share.png')} />
          </View>
        </View>

        <View style={{width: '100%'}}>
          <Button title="Scan Qr code" onPressButton={openChandleOpencamera} />
        </View>

        <View style={styles.lines}>
          <View style={styles.lineImg}></View>
          <Text style={{color: '#000000', fontSize: 14, paddingHorizontal: 12}}>
            Or for Manual Entry
          </Text>
          <View style={styles.lineImg}></View>
        </View>

        <View style={styles.containBox}>
          <InputBox
            label="Enter the Vehicle Number"
            placeholder="Enter the Vehicle Number"
            customInputStyles={{marginBottom: 10}}
          />
        </View>

        <Button
          title="Continue"
          customStyles={{
            width: 167,
            alignSelf: 'center',
            borderRadius: 50,
            marginBottom: 100,
          }}
        />
      </ScrollView>
    </>
  );
};

export default QRCodee;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 20,
  },
  image: {
    width: 148,
    height: 139,
    marginBottom: 25,
  },
  title: {
    fontSize: 23,
    fontFamily: FONTS.Andika.bold,
    marginBottom: 15,
    color: '#000000',
  },
  lines: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  lineImg: {
    width: 73,
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  containBox: {
    width: '100%',
    marginBottom: 5,
  },
  imgContainer: {
    width: 61,
    height: 50,
    borderWidth: 1,
    borderColor: '#FCDC0C',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
  },
});
