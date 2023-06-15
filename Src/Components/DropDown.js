import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const DropDown = ({
  label = '',
  DefaultName = '',
  dropdownItems = [],
  isShowTitle = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = item => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <View style={styles.containerList}>
      {isShowTitle && label ? <Text style={styles.label}>{label}</Text> : null}

      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Text>{selectedItem || DefaultName}</Text>
        {isOpen ? (
          <Image
            style={styles.upDown}
            source={require('../Assets/Png/up.png')}
          />
        ) : (
          <Image
            style={styles.upDown}
            source={require('../Assets/Png/down.png')}
          />
        )}
      </TouchableOpacity>
      {isOpen && (
        <View>
          {dropdownItems.map(item => (
            <TouchableOpacity key={item} onPress={() => handleSelectItem(item)}>
              <Text style={styles.dropdownItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  containerList: {
    elevation: 1,
  },

  dropdownButton: {
    height: 51,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    elevation: 2,
    paddingLeft: 20,
    fontSize: 14,
    backgroundColor: '#ffffff',
    color: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownItem: {
    borderColor: 'rgba(0, 0, 0, 0.05)',
    paddingLeft: 20,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    color: 'rgba(0, 0, 0, 0.6)',
    elevation: 2,
  },
  upDown: {
    width: 12,
    height: 12,
    marginRight: 20,
  },
  label: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 700,
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingTop: 10,
  },
});
