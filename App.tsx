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
import LessonScreen from './views/lession/LessonScreen';
import LessonDetail from './views/lession/LessonDetail';
import LessonDraw from './views/lession/LessonDraw';
import LessonResult from './views/lession/LessonResult';
import ColorHome from './views/coloring/ColorHome';
import Coloring from './views/coloring/Coloring';
import ResultColoring from './views/coloring/ResultColoring';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* LoadingScreen */}
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        {/* ColoringView */}
        <Stack.Screen
          name="ResultColoring"
          component={ResultColoring}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Coloring"
          component={Coloring}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ColorHome"
          component={ColorHome}
          options={{headerShown: false}}
        />
        {/* end ColoringView */}
        {/* lession view */}
        <Stack.Screen
          name="LessonResult"
          component={LessonResult}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LessonDraw"
          component={LessonDraw}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LessonDetail"
          component={LessonDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LessonScreen"
          component={LessonScreen}
          options={{headerShown: false}}
        />
        {/* end lession view */}
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
