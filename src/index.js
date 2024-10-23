import 'react-native-gesture-handler';

import React, {useEffect, useReducer, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import PropTypes from 'prop-types';

import {authReducer} from './reducers/authReducer';
import {initializeAppState} from './services/bootstrap';
import {SIGN_IN, SIGN_OUT} from './constants/actionTypes';
import {StoreProvider} from './contexts/ApplicationContext';

import SplashScreen from './screens/SplashScreen';
import InitialScreen from './screens/InitialScreen';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import TransactionList from './screens/TransactionList';
import TransactionCreate from './screens/TransactionCreate';
import TransactionView from './screens/TransactionView';
import TransactionEdit from './screens/TransactionEdit';

import {Colors} from './styles';

const Stack = createStackNavigator();

const App = props => {
  const initialState = {
    isLoading: true,
    userToken: null,
    loggedEmail: null,
    accounts: [],
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    initializeAppState(dispatch, props.env, props.baseUrl);
  }, [props.env, props.baseUrl]);

  const authActions = useMemo(
    () => ({
      signIn: async data => dispatch({type: SIGN_IN, token: data.token}),
      signOut: () => dispatch({type: SIGN_OUT}),
      signUp: async data => dispatch({type: SIGN_IN, token: data.token}),
    }),
    [],
  );

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <StoreProvider
      initialToken={state.userToken}
      initialEmail={state.loggedEmail}
      initialAccounts={state.accounts}
      authActions={authActions}
      {...props}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.blueFive},
            headerTintColor: Colors.white,
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
                name="TransactionList"
                component={TransactionList}
                options={{title: 'Transações', headerLeft: () => null}}
              />
              <Stack.Screen
                name="TransactionCreate"
                component={TransactionCreate}
                options={{
                  title: 'Nova transação',
                  headerBackTitleVisible: false,
                }}
              />
              <Stack.Screen
                name="TransactionView"
                component={TransactionView}
                options={{
                  title: 'Visualizar transação',
                  headerBackTitleVisible: false,
                }}
              />
              <Stack.Screen
                name="TransactionEdit"
                component={TransactionEdit}
                options={{
                  title: 'Editar transação',
                  headerBackTitleVisible: false,
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </StoreProvider>
  );
};

App.propTypes = {
  baseUrl: PropTypes.string,
  env: PropTypes.string,
};

App.defaultProps = {
  baseUrl: 'localhost:3000',
  env: 'local',
};

export default App;
