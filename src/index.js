import 'react-native-gesture-handler';

import React, {useEffect, useReducer, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import PropTypes from 'prop-types';

import {authReducer} from './reducers/authReducer';

import {StoreProvider} from './store';
import AsyncStorage from './modules/AsyncStorage';

import SplashScreen from './screens/SplashScreen';
import InitialScreen from './screens/InitialScreen';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import TransactionList from './screens/TransactionList';
import TransactionCreate from './screens/TransactionCreate';
import TransactionView from './screens/TransactionView';
import TransactionEdit from './screens/TransactionEdit';

import {getAccounts} from './services/AccountManager';

import {Colors} from './styles';

const Stack = createStackNavigator();

const App = props => {
  const [state, dispatch] = useReducer(authReducer, {
    isLoading: true,
    userToken: null,
    loggedEmail: null,
    accounts: [],
  });

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken, loggedEmail, accounts;

      try {
        userToken = await AsyncStorage.readData('userToken');
        loggedEmail = await AsyncStorage.readData('loggedEmail');
      } catch (e) {}

      if (userToken != null) {
        try {
          accounts = await getAccounts(props.env, props.baseUrl, userToken);
        } catch (e) {
          userToken = null;
          loggedEmail = null;
        }
      }

      dispatch({
        type: 'RESTORE_TOKEN',
        token: userToken,
        loggedEmail: loggedEmail,
        accounts: accounts,
      });
    };

    bootstrapAsync();
  }, [props.env, props.baseUrl]);

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
    <StoreProvider
      {...props}
      initialToken={state.userToken}
      initialEmail={state.loggedEmail}
      initialAccounts={state.accounts}
      authActions={authContext}>
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
