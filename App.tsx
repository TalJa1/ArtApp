/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingScreen from './views/init/LoadingScreen';
import StartScreen from './views/main/StartScreen';
import Sketh from './views/main/Sketh';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Main || Login */}
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        {/* Main View */}
        <Stack.Screen
          name="Sketh"
          component={Sketh}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{headerShown: false}}
        />
        {/* end Main View */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
