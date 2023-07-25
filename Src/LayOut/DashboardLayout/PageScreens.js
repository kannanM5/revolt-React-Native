import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  useWindowDimensions,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
import {pageScreens} from '../../SharedComponents/Arrays';
import {FONTS} from '../../Utilities/Fonts';
import Button from '../../Components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {setIntro} from '../../Store/Slices/AuthSlice';

const PageScreens = () => {
  const flatListRef = useRef(0);
  const {width: windowWidth} = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const isIntro = useSelector(state => state.auth.intro);
  const dispatch = useDispatch();

  const handleNextPage = (id, i) => {
    if (flatListRef.current) {
      if (i < 2)
        flatListRef.current.scrollToIndex({index: i + 1, animated: true});
      else if (i === 2) {
        dispatch(setIntro(true));
        console.log('else if');
      }
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pageScreens}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        horizontal
        ref={flatListRef}
        renderItem={({item, index}) => (
          <View style={[styles.content, {width: windowWidth}]}>
            <Text
              onPress={() => {
                dispatch(setIntro(true));
                console.log('------------');
              }}
              style={styles.option}>
              {item.option}
            </Text>
            <View style={styles.imgContainer}>
              <Image style={styles.image} source={item.img} />
            </View>
            <Text style={styles.text}>{item.title}</Text>
            <Button
              title={item.btnName}
              customStyles={{width: 120, height: 44}}
              onPressButton={() => handleNextPage(item.id, index)}
            />
          </View>
        )}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
      />
      <View style={styles.indicatorContainer}>
        {pageScreens.map((image, imageIndex) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (imageIndex - 1),
              windowWidth * imageIndex,
              windowWidth * (imageIndex + 1),
            ],
            outputRange: [8, 8, 8],
            extrapolate: 'clamp',
          });

          const backgroundColor = scrollX.interpolate({
            inputRange: [
              windowWidth * (imageIndex - 1),
              windowWidth * imageIndex,
              windowWidth * (imageIndex + 1),
            ],
            outputRange: ['#C4C4C4', '#F2CC0C', '#C4C4C4'],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={imageIndex}
              style={[styles.dot, {width, backgroundColor}]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default PageScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  imgContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  option: {
    position: 'absolute',
    color: '#F2CC0C',
    top: 10,
    right: 40,
    fontSize: 16,
    fontFamily: FONTS.Andika.bold,
  },
  text: {
    fontFamily: FONTS.Andika.bold,
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    width: 260,
  },

  dot: {
    width: 10,
    height: 9,
    marginRight: 5,
    backgroundColor: '#C4C4C4',
    marginRight: 15,
    borderRadius: 6,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
});
