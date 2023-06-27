import NewsFeed from '../LayOut/DashboardLayout/NewsFeed';
import NewsDetails from '../LayOut/DashboardLayout/NewsDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const NewsStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NEWSFEED" component={NewsFeed} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
};

export default NewsStack;
