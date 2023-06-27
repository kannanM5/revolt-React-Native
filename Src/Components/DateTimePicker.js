import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {FONTS} from '../Utilities/Fonts';
import {COLORS} from '../Utilities/Colors';

const DateTimePicker = ({label = '', customStyles, hours}) => {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();

  var amPm = hours >= 12 ? 'PM' : 'AM';
  var hours = hours % 12 || 12;

  var minutes = minutes < 10 ? '0' + minutes : minutes;
  var currentTime = `${hours} : ${minutes} ${amPm}`;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(currentTime);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = time => {
    const selectedDate = new Date(time);
    const currentDate = new Date();
    const timeDiff = Math.abs(selectedDate - currentDate);
    const minutesDiff = Math.floor((timeDiff / 1000 / 60) % 60);
    const hoursDiff = Math.floor(timeDiff / 1000 / 60 / 60);
    const formattedTime = time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    setSelectedTime(formattedTime);
    hideDatePicker();
  };
  return (
    <TouchableOpacity onPress={showDatePicker} activeOpacity={0.9}>
      <View style={[styles.datePiker, {...customStyles}]}>
        <View>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.time}>
            Today <Text> {selectedTime}</Text>
          </Text>
        </View>
        {/* {isShow ? <Text style={styles.differnces}>{differnces}</Text> : null} */}

        <View style={styles.separate}>
          <Image
            style={styles.img}
            source={require('../Assets/Png/Polygon3.png')}
          />
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        hourFormat="12"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </TouchableOpacity>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({
  datePiker: {
    backgroundColor: COLORS.white,
    width: 130,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    elevation: 5,
  },
  label: {
    fontSize: 12,
    fontFamily: FONTS.Andika.bold,
    color: COLORS.labelColor,
  },
  time: {
    fontSize: 11,
    fontFamily: FONTS.Andika.regular,
    color: COLORS.transparentDimColor,
  },
  img: {
    marginTop: 18,
  },
  differnces: {
    fontSize: 12,
    fontFamily: FONTS.Andika.bold,
    color: COLORS.red,
  },
});
