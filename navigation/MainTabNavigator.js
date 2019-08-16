import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import DecksScreen from '../screens/DecksScreen'
import AddDeckScreen from '../screens/AddDeckScreen'

import Colors from '../constants/Colors'

const config = Platform.select({
  ios: {

  },
  android: {

  },
  default: {
  },
})

const DecksStack = createStackNavigator(
  {
    Decks: DecksScreen,
  },
  {
      headerMode: 'none',
      header: null
  }
)

DecksStack.navigationOptions = {
  tabBarLabel: 'Decks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='book'
    />
  ),
}

DecksStack.path = ''

const AddDeckStack = createStackNavigator(
  {
    AddDeck: AddDeckScreen,
  },
  {
      headerMode: 'none',
      header: null
  }
)

AddDeckStack.navigationOptions = {
  tabBarLabel: 'Add Deck',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='plus' />
  ),
}

AddDeckStack.path = ''

const tabNavigator = createBottomTabNavigator({
  HomeStack: DecksStack,
  AddDeckStack: AddDeckStack,
}, {
  tabBarOptions: {
    activeTintColor: Colors.tintColor
  }
})

tabNavigator.path = ''

export default tabNavigator
