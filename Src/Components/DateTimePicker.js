import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const DateTimePicker = ({label = ''}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = time => {
    const formattedTime = time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    setSelectedTime(formattedTime);
    hideDatePicker();
  };
  return (
    <TouchableOpacity onPress={showDatePicker}>
      <View style={styles.datePiker}>
        <View>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.time}>
            Today <Text> {selectedTime}</Text>
          </Text>
        </View>

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
    backgroundColor: '#FFFFFF',
    width: 130,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: 700,
    color: 'rgba(0, 0, 0, 0.76)',
    paddingBottom: 4,
  },
  time: {
    fontSize: 11,
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.65)',
  },
  img: {
    marginTop: 18,
  },
});
