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
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={InitialScreen}
          options={{title: 'Transactions App: Início'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{title: 'Cadastre-se'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
