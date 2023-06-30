import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Button from '../../../Components/Button';
import React, {useState} from 'react';
import {timeDuration} from '../../../SharedComponents/Arrays';
import {FONTS} from '../../../Utilities/Fonts';

const ParkingAbout = () => {
  // const [arr, setArr] = useState(timeDuration);
  const [selectedId, setselectedId] = useState(null);

  const handleColor = currentId => {
    setselectedId(currentId);
    return;
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 23,
            color: 'rgba(0, 0, 0, 0.6)',
            fontFamily: FONTS.Andika.regular,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh a,
          mattis libero nec etiam. Nisl odio facilisi laoreet scelerisque.
        </Text>
        <Text style={styles.subTitle}>Parking Time</Text>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={timeDuration}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleColor(item.id)}>
              <View
                style={[
                  styles.contentSection,
                  item.id === selectedId && styles.setColor,
                ]}>
                <Text
                  style={[
                    styles.time,
                    item.id === selectedId && styles.setTextColor,
                  ]}>
                  {item.time}
                </Text>
                <Text
                  style={[
                    styles.hours,
                    item.id === selectedId && styles.setTextColor,
                  ]}>
                  {item.hours}
                </Text>
                <Text
                  style={[
                    styles.rate,
                    item.id === selectedId && styles.setTextColor,
                  ]}>
                  {item.rate}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <Button title="Book Parking Spot" customStyles={{marginTop: 0}} />
      </View>
    </ScrollView>
  );
};

export default ParkingAbout;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 5,
    marginBottom: 65,
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 6,
    fontFamily: FONTS.Andika.bold,
  },

  rating: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  star: {
    marginRight: 3,
    width: 12,
    height: 12,
  },

  contentSection: {
    marginRight: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: 88,
    height: 92,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  time: {
    fontSize: 18,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 0.51)',
  },
  hours: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.51)',
    fontFamily: FONTS.Andika.regular,
  },
  rate: {
    fontSize: 13,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 0.51)',
  },
  setColor: {
    backgroundColor: '#1B65D4',
  },
  setTextColor: {
    color: 'white',
  },
});
