import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import Constant from 'expo-constants';

import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import { MaterialIcons } from '@expo/vector-icons';

import { Provider, useSelector } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer } from './src/reducers/reducer';
import { themeReducer } from './src/reducers/theme.reducer';


const customDarkTheme = {
  ...DarkTheme, 
  colors: {
    ...DarkTheme.colors,
    headerColor: "#404040",
    iconColor: "white",
    tabIcon: "white"
  }
}

const customDefaultTheme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor: "black",
    tabIcon: "red"
  }
}


const rootReducer = combineReducers({
  cardData: reducer, // []
  myDarkMode: themeReducer //false
})


const store = createStore(rootReducer); 

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'explore') {
          iconName = 'explore';
        } else if (route.name === 'subscribe') {
          iconName = 'subscriptions';
        }

        return <MaterialIcons name={iconName} size={32} color={color} />
      },
        
    })}
  tabBarOptions={{
    activeTintColor: colors.tabIcon,
    inactiveTintColor: colors.tabIcon
  }}
    >
 

    <Tabs.Screen name="home" component={ HomeScreen } />
    <Tabs.Screen name="explore" component={ Explore } />
    <Tabs.Screen name="subscribe" component={ Subscribe } />
  </Tabs.Navigator>
 )
}


export default App = () => {
  return (
    <Provider store={ store }>
     <Navigation/>
    </Provider>
  )
 
}



export  function Navigation() {

  let currentTheme = useSelector( state => {
    return state.myDarkMode;
  })


  return (
    <NavigationContainer theme={ currentTheme ? customDarkTheme : customDefaultTheme }>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={ RootHome } />
        <Stack.Screen name="search" component={ SearchScreen } />
        <Stack.Screen name="videoPlayer" component={ VideoPlayer } />
      </Stack.Navigator>
    </NavigationContainer>
    
  ); 
}


