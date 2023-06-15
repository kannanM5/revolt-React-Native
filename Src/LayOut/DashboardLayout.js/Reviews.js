import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';

const dataArray = [
  {
    id: 1,
    img: require('../../Assets/Png/star1.png'),
    pressImg: require('../../Assets/Png/star2.png'),
    pressed: false,
  },
  {
    id: 2,
    img: require('../../Assets/Png/star1.png'),
    pressImg: require('../../Assets/Png/star2.png'),
    pressed: false,
  },
  {
    id: 3,
    img: require('../../Assets/Png/star1.png'),
    pressImg: require('../../Assets/Png/star2.png'),
    pressed: false,
  },
  {
    id: 4,
    img: require('../../Assets/Png/star1.png'),
    pressImg: require('../../Assets/Png/star2.png'),
    pressed: false,
  },
  {
    id: 5,
    img: require('../../Assets/Png/star1.png'),
    pressImg: require('../../Assets/Png/star2.png'),
    pressed: false,
  },
];

const Reviews = () => {
  const [myArr, setMyArr] = useState(dataArray);

  const handleStarPress = id => {
    let refData = [...myArr];
    let ind = refData.findIndex(ele => ele.id === id);
    if (ind > -1) {
      refData[ind].pressed = !refData[ind].pressed;
    }
    setMyArr(refData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleName}>Please Rate Your Service Experience</Text>
      <Text style={styles.titleContent}>
        Your valuable Ratings help us to improve our Services. it helps us to
        serve you better
      </Text>
      <View style={styles.rating}>
        {myArr.map((e, i) => {
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
    fontWeight: 700,
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 5,
    width: 302,
  },
  titleContent: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
    lineHeight: 19,
    width: 227,
    textAlign: 'center',
    marginBottom: 10,
    alignSelf: 'center',
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
