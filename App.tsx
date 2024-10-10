/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingScreen from './views/init/LoadingScreen';
import StartScreen from './views/main/StartScreen';
import Sketh from './views/main/Sketh';
import DrawScreen from './views/draw/DrawScreen';
import Suggestion from './views/draw/Suggestion';
import RealSuggestion from './views/draw/RealSuggestion';
import DrawResult from './views/draw/DrawResult';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* LoadingScreen */}
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        {/* Main View */}
        <Stack.Screen
          name="DrawResult"
          component={DrawResult}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RealSuggestion"
          component={RealSuggestion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Suggestion"
          component={Suggestion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawScreen"
          component={DrawScreen}
          options={{headerShown: false}}
        />
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
