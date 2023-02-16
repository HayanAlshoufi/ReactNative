//import {View, Text} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';

// Screen
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ShoppingCart from '../screens/ShoppingCart';

import SignInScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Meal1 from '../screens/Meal1';
import Meal2 from '../screens/Meal2';
import Api from '../screens/API/api';


const Stack = createNativeStackNavigator();
// const HomeStack = createStackNavigator();
// const SearchStack = createStackNavigator();
// const NotificationStack = createStackNavigator();
// const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator();

// const HomeStackScreen = () =>(
//     <HomeStack.Navigator>
//         <HomeStack.Screen name='Home' component={HomeScreen}/>
//     </HomeStack.Navigator>
// )
// const SearchStackScreen = () =>(
//     <SearchStack.Navigator>
//         <SearchStack.Screen name='Search' component={SearchScreen}/>
//     </SearchStack.Navigator>
// )
// const NotificationStackScreen = () =>(
//     <NotificationStack.Navigator>
//         <NotificationStack.Screen name='Notification' component={NotificationScreen}/>
//     </NotificationStack.Navigator>
// )
// const ProfileStackScreen = () =>(
//     <ProfileStack.Navigator>
//         <ProfileStack.Screen name='Profile' component={ProfileScreen}/>
//     </ProfileStack.Navigator>
// )

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
         <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Notification" component={NotificationStackScreen} />
         <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>  */}
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Meal1" component={Meal1} />
        <Stack.Screen name="Meal2" component={Meal2} />
        <Stack.Screen name="Api" component={Api} />
        <Stack.Screen name="HomeScreen" component={HomeNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="red"
      inactiveColor="red"
      screenOptions={({route, navigation}) => {
        return {
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarLabel: navigation.isFocused() ? route.name : '',
        };
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return <FontAwesome5 name="home" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Ionicons
                name="search-outline"
                size={25}
                color={color}
                focused={focused}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Cart"
        component={ShoppingCart}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Fontisto
                name="shopping-basket-add"
                size={25}
                color={color}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Ionicons
                name="notifications-outline"
                size={25}
                color={color}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Ionicons
                name="ios-person-circle"
                size={25}
                color={color}
                focused={focused}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
