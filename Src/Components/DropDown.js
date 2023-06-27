import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {FONTS} from '../Utilities/Fonts';
import {COLORS} from '../Utilities/Colors';

const DropDown = ({
  label = '',
  DefaultName = '',
  dropdownItems = [],
  isShowTitle = true,
  customStyles,
  customStylesDefaultText,
  customImgStyle,
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

      <TouchableOpacity
        onPress={toggleDropdown}
        activeOpacity={0.9}
        style={[styles.dropdownButton, {...customStyles}]}>
        <Text style={[styles.DefaultName, {...customStylesDefaultText}]}>
          {selectedItem || DefaultName}
        </Text>
        {isOpen ? (
          <Image
            style={[styles.upDown, {...customImgStyle}]}
            source={require('../Assets/Png/up.png')}
          />
        ) : (
          <Image
            style={[styles.upDown, {...customImgStyle}]}
            source={require('../Assets/Png/down.png')}
          />
        )}
      </TouchableOpacity>
      {isOpen && (
        <View>
          {dropdownItems.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleSelectItem(item)}>
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
    borderColor: COLORS.borderColor,
    elevation: 2,
    paddingLeft: 20,
    fontSize: 14,
    backgroundColor: COLORS.white,
    color: COLORS.transparentDimColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownItem: {
    borderColor: COLORS.borderColor,
    paddingLeft: 20,
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    color: COLORS.transparentDimColor,
    elevation: 2,
  },
  upDown: {
    width: 12,
    height: 12,
    marginRight: 20,
    alignSelf: 'center',
  },
  label: {
    fontSize: 15,
    color: COLORS.labelColor,
    fontWeight: 700,
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingTop: 10,
  },
  DefaultName: {
    fontSize: 14,
    fontFamily: FONTS.Andika.regular,
    color: COLORS.placeHolderColor,
    alignSelf: 'center',
  },
});
