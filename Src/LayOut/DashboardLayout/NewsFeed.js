import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {newFeed} from '../../SharedComponents/Arrays';
import {useNavigation} from '@react-navigation/native';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';
import {newsfeed} from '../../Services/Services';
import {useSelector} from 'react-redux';

const NewsFeed = () => {
  const navigation = useNavigation();
  const myToken = useSelector(state => state.auth.token);
  const [newsFeed, setNewsFeed] = useState();

  useEffect(() => {
    handleNewsFeed();
  }, []);

  const handleNewsFeed = () => {
    const formData = new FormData();
    formData.append('token', myToken);
    formData.append('page', 1);
    newsfeed(formData)
      .then(res => {
        // console.log(res);
        if (res.data.status === 1) {
          // console.log(res.data.newsfeed);
          setNewsFeed(res?.data?.newsfeed);

          console.log(newsFeed, 'newsfeed');
        } else {
          console.log('error');
        }
      })
      .catch(err => console.log(err, 'error'));
  };
  return (
    <>
      <SubHeader titleName="Latest News" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={newFeed}
          renderItem={({item}) => (
            <View style={styles.info}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('NewsDetails', {items: item})
                }>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.content}</Text>
                <Image
                  style={{marginVertical: 10, width: '100%', borderRadius: 10}}
                  source={item.img}
                />
                <View style={styles.footer}>
                  <View style={styles.left}>
                    <View style={styles.containBox}>
                      <Image
                        style={styles.img}
                        source={require('../../Assets/Png/thumbsup.png')}
                      />
                    </View>
                    <Text
                      style={{
                        marginRight: 13,
                        fontFamily: FONTS.Andika.bold,
                        color: 'rgba(0, 0, 0, 0.7)',
                      }}>
                      {item.likes}
                    </Text>

                    <View style={styles.containBox}>
                      <Image
                        style={styles.img}
                        source={require('../../Assets/Png/bookMark.png')}
                      />
                    </View>
                    <Text
                      style={{
                        fontFamily: FONTS.Andika.bold,
                        color: 'rgba(0, 0, 0, 0.7)',
                      }}>
                      Save
                    </Text>
                  </View>
                  <View>
                    <Image source={require('../../Assets/Png/menu1.png')} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default NewsFeed;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 10,
    marginBottom: 75,
    flex: 1,
  },
  info: {
    elevation: 5,
    bordeBottomrWidth: 2,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRightColor: 'rgba(0, 0, 0, 0.04)',
    borderLeftColor: 'rgba(0, 0, 0, 0.04)',
    borderBottomColor: 'rgba(0, 0, 0, 0.04)',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFFF',
  },
  title: {
    fontSize: 15.5,
    color: '#FB3333',
    fontFamily: FONTS.Andika.bold,
  },
  content: {
    fontSize: 12,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 0.7)',
    lineHeight: 17,
    width: '85%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containBox: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    width: 29,
    height: 29,
    justifyContent: 'center',
    marginRight: 5,
  },
  img: {
    alignSelf: 'center',
  },
});
