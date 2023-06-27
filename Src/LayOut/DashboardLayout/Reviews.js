import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {starDataArray} from '../../SharedComponents/Arrays';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';

const Reviews = ({navigation}) => {
  const [myArr, setMyArr] = useState(starDataArray);

  const handleStarPress = id => {
    let refData = [...myArr];
    let ind = refData.findIndex(ele => ele.id === id);
    if (ind > -1) {
      refData[ind].pressed = !refData[ind].pressed;
    }
    setMyArr(refData);
  };

  return (
    <>
      <SubHeader
        titleName="Review and Ratings"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.titleName}>
          Please Rate Your Service Experience
        </Text>
        <Text style={styles.titleContent}>
          Your valuable Ratings help us to improve our Services. it helps us to
          serve you better
        </Text>
        <View style={styles.rating}>
          {starDataArray.map((e, i) => {
            return (
              <TouchableOpacity onPress={() => handleStarPress(e.id)} key={i}>
                <Image
                  source={e.pressed ? e.pressImg : e.img}
                  style={styles.star}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.feedback}>Submit Your Feedback</Text>
        <InputBox
          placeholder="Tell us on how  can we improve....."
          customInputStyles={{
            height: 150,
            marginTop: -25,
            marginBottom: 20,
            textAlignVertical: 'top',
          }}
        />
        <Button title="SUBMIT" />
      </View>
    </>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    paddingVertical: 20,
  },
  titleName: {
    fontSize: 21,
    color: 'rgba(0, 0, 0, 0.85)',
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 5,
    width: 302,
    fontFamily: FONTS.Andika.bold,
  },
  titleContent: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
    lineHeight: 19,
    width: 227,
    textAlign: 'center',
    marginBottom: 10,
    alignSelf: 'center',
    fontFamily: FONTS.Andika.regular,
  },
  rating: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 25,
  },
  star: {
    marginRight: 5,
    width: 25,
    height: 25,
  },
  feedback: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 14,
    fontWeight: 700,
  },
});
