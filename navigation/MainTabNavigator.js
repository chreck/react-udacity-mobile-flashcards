import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import DecksScreen from '../screens/DecksScreen'
import AddDeckScreen from '../screens/AddDeckScreen'

import Colors from '../constants/Colors'

const routeConfigMap = {
  Decks : {
    screen: DecksScreen,
    navigationOptions : {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name='book'
        />
      ),
    },
  },
  AddDeck: {
    screen: AddDeckScreen,
    navigationOptions : {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name='plus' />
      ),
    },
  }
}

const drawConfig = {
  headerMode: 'none',
  header: null,
  tabBarOptions: {
    activeTintColor: Colors.tintColor
  }
}

const tabNavigator = createBottomTabNavigator(routeConfigMap, drawConfig)

export default tabNavigator
