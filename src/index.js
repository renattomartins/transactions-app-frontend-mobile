import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StoreProvider} from './store';
import PropTypes from 'prop-types';

import SplashScreen from './screens/SplashScreen';
import InitialScreen from './screens/InitialScreen';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Transactions from './screens/Transactions';

import {Colors} from './styles';

const Stack = createStackNavigator();

const getIsSignedIn = () => {
  // custom logic
  return false;
};

const App = props => {
  const [isLoading, setIsLoading] = useState(false);
  const isSignedIn = getIsSignedIn();

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <StoreProvider {...props}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.blueFive},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Transactions"
                component={Transactions}
                options={{title: 'Transações', headerLeft: () => null}}
              />
            </>
          ) : (
            <>
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
                name="Login"
                component={Login}
                options={{title: 'Entrar', headerBackTitleVisible: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

App.propTypes = {
  env: PropTypes.string,
};

App.defaultProps = {
  env: 'local',
};

export default App;
