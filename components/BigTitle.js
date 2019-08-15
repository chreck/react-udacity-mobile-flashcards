import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import Title from '../components/Title'

export default function BigTitle(props) {
  return (
    <Title {...props} style={[styles.title, props.style, { fontFamily: 'ben-script' }]} />
  )
}

const styles = StyleSheet.create({
  title: {
      marginTop: 40,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
      fontSize: 72
  }
})