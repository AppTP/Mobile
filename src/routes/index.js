import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';

import Login from '../pages/Login';
// import Dashboard from './pages/Dashboard';
import RequestProfile from '../pages/RequestProfile';
import ReviewsStar from '../pages/ReviewsStar';
import SignIn from '../pages/SignIn';

// import DashboardDrawer from './dashboard.routes';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import Logout from '../pages/Logout';
// Custom Drawer
import CustomDrawerNavigator from '../components/CustomDrawerNavigator';
import CustomDrawer from './CustomDrawer';
import Screens from './Stack';

const Drawer = createDrawerNavigator();

// Variaveis de Navegação
const Stack = createStackNavigator();

// enableScreens();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" options={{headerShown: false}}>
        {() => (
          <Drawer.Navigator drawerContent={CustomDrawer}>
            <Drawer.Screen name="Screens">
              {props => <Screens {...props} />}
            </Drawer.Screen>
          </Drawer.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
