import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {newFeed} from '../../SharedComponents/Arrays';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';
import {newsfeed} from '../../Services/Services';
import Loader from '../AuthLayout/Loader';
import {trimString, useToken} from '../../Utilities/Constants';

var currentPage = 1;
var totalPages = 1;

const NewsFeed = ({navigation}) => {
  const myToken = useToken();
  const [arr, setArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    handleNewsFeed(1);
  }, []);

  const handleNewsFeed = (pageNumber = 1) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append('token', myToken);
    formData.append('page', pageNumber);
    newsfeed(formData)
      .then(res => {
        if (res.data.status === 1) {
          let Data = res.data.newsfeed.map(ele => JSON.parse(ele));
          if (pageNumber === 1) {
            totalPages = parseInt(res.data.totalpages);
            setArr(Data);
          } else {
            setArr(preListData => [...preListData, ...Data]);
          }
        }
      })
      .catch(err => {
        console.log(err, 'error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onEndReached = () => {
    currentPage = currentPage + 1;
    if (currentPage <= totalPages) {
      handleNewsFeed(currentPage);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <>
      <SubHeader titleName="Latest News" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={arr}
          refreshControl={
            <RefreshControl
              onRefresh={onRefresh}
              refreshing={refreshing}
              progressBackgroundColor={'white'}
              colors={['#FCDC0C']}
            />
          }
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={isLoading && <Loader />}
          renderItem={({item}) => (
            <View style={styles.info}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('NewsDetails', {items: item, arr: arr})
                }>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>
                  {trimString(item.description, 90)}
                </Text>
                <Image
                  style={{
                    marginVertical: 10,
                    width: '100%',
                    height: 150,
                    borderRadius: 10,
                  }}
                  source={{uri: item.urlToImage}}
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
                      120k
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
    width: '100%',
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
