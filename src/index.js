import 'react-native-gesture-handler';

import React, {useEffect, useReducer, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StoreProvider} from './store';
import PropTypes from 'prop-types';

import AsyncStorage from './modules/AsyncStorage';

import SplashScreen from './screens/SplashScreen';
import InitialScreen from './screens/InitialScreen';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Transactions from './screens/Transactions';

import {getAccounts} from './services/AccountManager';

import {Colors} from './styles';

const Stack = createStackNavigator();

const App = props => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      userToken: null,
    },
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      // Trying restore token from local storage
      try {
        userToken = await AsyncStorage.readData('userToken');
      } catch (e) {}

      // After restoring token, we may need to validate it in production apps
      if (userToken != null) {
        try {
          await getAccounts(props.env, userToken);
        } catch (e) {
          userToken = null;
        }
      }

      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, [props.env]);

  const authContext = useMemo(
    () => ({
      signIn: async data => dispatch({type: 'SIGN_IN', token: data.token}),
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => dispatch({type: 'SIGN_IN', token: data.token}),
    }),
    [],
  );

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <StoreProvider {...props} token={state.userToken} authActions={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.blueFive},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}>
          {state.userToken === null ? (
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
          ) : (
            <>
              <Stack.Screen
                name="Transactions"
                component={Transactions}
                options={{title: 'Transações', headerLeft: () => null}}
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
