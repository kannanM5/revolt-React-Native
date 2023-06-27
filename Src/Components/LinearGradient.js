import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientComponent = ({colorarr, customStyles, text}) => {
  return (
    <View>
      <LinearGradient
        colors={[...colorarr]}
        style={[styles.linearGradient, {...customStyles}]}>
        <Text>{text}</Text>
      </LinearGradient>
    </View>
  );
};

export default LinearGradientComponent;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
