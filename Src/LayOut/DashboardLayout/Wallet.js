import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from '../../Components/Button';
import Loader from '../AuthLayout/Loader';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';
import {walletbalance, mywallethistory} from '../../Services/Services';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {setWalletAmount, setHistoryArr} from '../../Store/Slices/WalletSlice';
import {useToken} from '../../Utilities/Constants';

var currentPage = 1;
var totalPages = 1;

const Wallet = ({navigation}) => {
  const dispatch = useDispatch();
  const myToken = useToken();
  const [historyArr, setHistoryArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const balance = useSelector(state => state.wallet.walletAmount);

  useEffect(() => {
    walletBalanceAPI();
    mywallethistoryApi();
  }, []);

  const walletBalanceAPI = () => {
    const formData = new FormData();
    formData.append('token', myToken);
    walletbalance(formData)
      .then(res => {
        if (res.data.status === 1) {
          dispatch(setWalletAmount(res.data.balance));
        }
      })
      .catch(error => console.log('error', error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSubmit = () => {
    navigation.navigate('AddMoney');
  };

  const mywallethistoryApi = (pageNumber = 1) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('token', myToken);
    formData.append('pagenumber', pageNumber);
    mywallethistory(formData)
      .then(res => {
        if (res.data.status === 1) {
          let Data = res.data.wallet.map(ele => ele);
          if (pageNumber === 1) {
            totalPages = parseInt(res.data.totalpages);
            setHistoryArr(Data);
          } else {
            setHistoryArr(preListData => [...preListData, ...Data]);
          }
        }
      })
      .catch(error => console.log('error', error));
  };

  const onEndReached = () => {
    currentPage = currentPage + 1;
    if (currentPage <= totalPages) {
      mywallethistoryApi(currentPage);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      mywallethistoryApi();
    }, 2000);
  };

  return (
    <>
      <SubHeader titleName="Wallet" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Image
          style={styles.walletImage}
          source={require('../../Assets/Png/wallet1.png')}
        />
        <Text style={styles.titleName}>Wallet Balance </Text>
        <Text style={styles.amount}>₹ {balance} </Text>
        <View style={styles.buttonContainer}>
          <Button title="+ Add Money" onPressButton={handleSubmit} />
        </View>
        <Text style={styles.subTitle}>History</Text>
        <FlatList
          data={historyArr}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          keyExtractor={item => item.id}
          ListFooterComponent={isLoading && <Loader />}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              onRefresh={onRefresh}
              refreshing={refreshing}
              progressBackgroundColor={'white'}
              colors={['#FCDC0C']}
            />
          }
          renderItem={({item}) => (
            <View style={styles.paymentDetails}>
              <View>
                <Text style={styles.amountDetails}>Rs. {item.amount}</Text>
                <Text style={styles.timing}>
                  {moment(item.payment_date).format('D MMMM YYYY, h:mm a')}
                </Text>
              </View>
              <Text style={styles.isSend}>{item.payment_type}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 20,
    marginBottom: 70,
  },
  walletImage: {
    width: 195,
    height: 126,
  },
  titleName: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingTop: 5,
    fontFamily: FONTS.Andika.regular,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
  amount: {
    fontFamily: FONTS.Andika.bold,
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.9)',
  },
  subTitle: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontFamily: FONTS.Andika.bold,
    color: 'rgba(0, 0, 0, 0.8)',
    marginTop: -10,
  },
  paymentDetails: {
    width: '100%',
    height: 65,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 0,
    borderLeftColor: 'rgba(0, 0, 0, 0.1)',
    borderRightColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 1,
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  amountDetails: {
    fontFamily: FONTS.Andika.regular,
    color: 'black',
  },
  timing: {
    fontSize: 11,
    color: 'rgba(0, 0, 0, 0.58)',
    fontFamily: FONTS.Andika.regular,
  },
  isSend: {
    color: '#FEBF00',
    fontSize: 12.5,
    fontFamily: FONTS.Andika.regular,
  },
});
