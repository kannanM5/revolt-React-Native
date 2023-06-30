import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';

const NewsDetails = ({navigation}) => {
  const route = useRoute();
  const detail = route.params.items;
  return (
    <ScrollView>
      <SubHeader titleName="Latest News" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.title}>{detail.content}</Text>
        <Image style={styles.img} source={detail.img} />
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec feugiat
          tristique congue scelerisque augue. Non orci, at pretium turpis
          malesuada convallis ultrices in tristique. At posuere maecenas justo
          dictumst tellus tortor. Leo consequat purus mi dolor in elit sem
          ornare et. Odio pellentesque gravida id habitasse.
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
              source={require('../../Assets/Png/one1.png')}
            />
          </View>

          <View style={{width: '33%'}}>
            <View>
              <Image
                style={{
                  height: 110,
                  width: '100%',
                  marginBottom: 10,
                  marginLeft: 15,
                  borderRadius: 10,
                }}
                source={require('../../Assets/Png/one2.png')}
              />
            </View>
            <View>
              <Image
                style={{
                  height: 110,
                  width: '100%',
                  marginTop: 10,
                  marginLeft: 15,
                  borderRadius: 10,
                }}
                source={require('../../Assets/Png/one3.png')}
              />
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 13,
            fontFamily: FONTS.Andika.bold,
            lineHeight: 19,
            marginVertical: 10,
            marginBottom: 70,
            color: 'rgba(0, 0, 0, 0.8)',
          }}>
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
    marginHorizontal: 25,
    marginVertical: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 0.9)',
    lineHeight: 23,
  },
  img: {
    marginVertical: 10,
    width: '100%',
  },
  content: {
    fontSize: 13,
    fontFamily: FONTS.Andika.regular,
    color: 'rgba(0, 0, 0, 0.8)',
    lineHeight: 17,
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
});
