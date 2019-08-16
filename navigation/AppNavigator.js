import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import DeckDetailScreen from '../screens/DeckDetailScreen'
import QuizScreen from '../screens/QuizScreen'
import QuizFinishedScreen from '../screens/QuizFinishedScreen'
import AddCardScreen from '../screens/AddCardScreen'

import Colors from '../constants/Colors'

const drawConfig = {
  headerMode: 'none',
  header: null,
  tabBarOptions: {
    activeTintColor: Colors.tintColor
  }
}

const MainNavigator = createStackNavigator({
  Home: {
    screen: MainTabNavigator
  },
  DeckDetail: {
    screen: DeckDetailScreen
  },
  Quiz: {
    screen: QuizScreen
  },
  QuizFinished: {
    screen: QuizFinishedScreen
  },
  AddCard: {
    screen: AddCardScreen
  }
}, drawConfig)

export default createAppContainer(
  MainNavigator
)
