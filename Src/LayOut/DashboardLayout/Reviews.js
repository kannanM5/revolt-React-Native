import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {starDataArray} from '../../SharedComponents/Arrays';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';
import {review} from '../../Services/Services';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useToken} from '../../Utilities/Constants';

const Reviews = ({navigation}) => {
  const [myArr, setMyArr] = useState(starDataArray);
  const myToken = useToken();
  var refData = [...myArr];

  const handleStarPress = id => {
    let ind = refData.findIndex(ele => ele.id === id);
    if (ind > -1) {
      refData[ind].pressed = !refData[ind].pressed;
      if (refData[ind].pressed) {
        refData[ind].count = 1;
      } else {
        refData[ind].count = 0;
      }
    }
    setMyArr(refData);
  };

  const sumCount = refData.reduce((acc, cur) => {
    return cur.count + acc;
  }, 0);

  const SignupSchema = Yup.object().shape({
    feedback: Yup.string().required('Feedback cannot be blank'),
  });

  const {handleChange, handleSubmit, errors, values, touched, resetForm} =
    useFormik({
      initialValues: {
        feedback: '',
      },
      validationSchema: SignupSchema,
      onSubmit: values => {
        handleReview(values);
        resetForm();

        refData.map(ele => (ele.pressed = false));
        setMyArr(refData);
      },
    });

  const handleReview = data => {
    const formData = new FormData();
    formData.append('token', myToken);
    formData.append('rating', sumCount);
    formData.append('feedback', data.feedback);

    review(formData)
      .then(res => {
        if (res.data.status === 1) {
          console.log(res.data, '=========Success');
        }
      })
      .catch(error => console.log(error, 'error'));
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
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleStarPress(e.id)}
                key={i}>
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
          value={values.feedback}
          onChangeText={handleChange('feedback')}
          errors={errors.feedback && touched.feedback ? true : null}
          errorText={errors.feedback}
          customInputStyles={{
            height: 150,
            marginTop: -25,
            textAlignVertical: 'top',
          }}
        />
        <Button title="SUBMIT" onPressButton={handleSubmit} />
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
