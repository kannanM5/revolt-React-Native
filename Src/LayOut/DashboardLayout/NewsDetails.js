import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';
import {trimString} from '../../Utilities/Constants';

const NewsDetails = ({navigation, route}) => {
  const detail = route.params.items;
  const myArr = route.params.arr;

  const [show, setShow] = useState(true);

  const handleShowMore = () => {
    setShow(!show);
  };

  return (
    <ScrollView>
      <SubHeader
        titleName={trimString(detail.title, 20)}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{detail.title}</Text>
        <Image style={styles.img} source={{uri: detail.urlToImage}} />
        <Text style={styles.content}>
          {show ? trimString(detail.content, 80) : detail.content}
        </Text>
        <Text style={styles.seemore} onPress={handleShowMore}>
          {show ? 'See more...' : 'See less...'}
        </Text>

        <Text style={styles.subTitle}>Related</Text>
        <View style={styles.line}></View>
        <Text style={styles.TitleName}>
          EV Charging Connectors Come In Many Shapes And Sizes
        </Text>

        <View style={{flexDirection: 'row'}}>
          <View style={{width: '63%'}}>
            <Image
              style={{height: 240, width: '100%', borderRadius: 10}}
              source={{uri: myArr[1].urlToImage}}
              resizeMode="contain"
            />
          </View>

          <View style={{width: '33%'}}>
            <View>
              <Image
                style={[styles.collapseImage, {marginBottom: 10, marginTop: 0}]}
                source={{uri: myArr[2].urlToImage}}
                resizeMode="contain"
              />
            </View>
            <View>
              <Image
                style={styles.collapseImage}
                source={{uri: myArr[3].urlToImage}}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <Text style={[styles.content, {marginBottom: 70, marginVertical: 10}]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec feugiat
          tristique congue scelerisque augue.
        </Text>
      </View>
    </ScrollView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.Andika.bold,
    color: '#F2CC0C',
    lineHeight: 23,
  },
  img: {
    marginVertical: 10,
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  content: {
    fontSize: 14,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 0.4)',
    lineHeight: 21,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 1)',
    marginVertical: 8,
  },
  line: {
    width: 40,
    height: 3,
    backgroundColor: '#FCDC0C',
  },
  TitleName: {
    fontSize: 16,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 1)',
    lineHeight: 25,
    marginVertical: 6,
  },
  seemore: {
    fontSize: 15,
    color: 'black',
    fontFamily: FONTS.Andika.bold,
  },
  collapseImage: {
    height: 110,
    width: '100%',
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 10,
  },
});
