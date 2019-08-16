import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import DeckDetailScreen from '../screens/DeckDetailScreen'
import QuizScreen from '../screens/QuizScreen'
import QuizFinishedScreen from '../screens/QuizFinishedScreen'
import AddCardScreen from '../screens/AddCardScreen'

import Colors from '../constants/Colors'

const drawConfig = {
  tabBarOptions: {
    activeTintColor: Colors.tintColor
  }
}

const MainNavigator = createStackNavigator({
  Home: {
    screen: MainTabNavigator,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  DeckDetail: {
    screen: DeckDetailScreen,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: Colors.tintColor,
    }),
  },
  Quiz: {
    screen: QuizScreen,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: Colors.tintColor,
    }),
  },
  QuizFinished: {
    screen: QuizFinishedScreen,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: Colors.tintColor,
    }),
  },
  AddCard: {
    screen: AddCardScreen,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: Colors.tintColor,
    }),
  }
}, drawConfig)

export default createAppContainer(
  MainNavigator
)
