import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import InitialScreen from './screens/InitialScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#4EA8DE'},
          headerTintColor: '#fff',
        }}>
        <Stack.Screen
          name="Home"
          component={InitialScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{title: 'Cadastrar'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
