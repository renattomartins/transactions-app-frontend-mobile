import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StoreProvider} from './store';

import InitialScreen from './screens/InitialScreen';
import SignUp from './screens/SignUp';
import Transactions from './screens/Transactions';

import {Colors} from './styles';

const Stack = createStackNavigator();

const App = props => {
  return (
    <StoreProvider {...props}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.blueFive},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Home"
            component={InitialScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: 'Cadastre-se', headerBackTitleVisible: false}}
          />
          <Stack.Screen
            name="Transactions"
            component={Transactions}
            options={{title: 'Transações', headerLeft: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

App.defaultProps = {
  env: 'local',
};

export default App;
