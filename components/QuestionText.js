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
import Card from '../components/Card'

export default function Component(props) {
  return (
    <Card>
      <Title {...props} style={[styles.text, props.style, { fontFamily: 'ben-script' }]} />
    </Card>
  )
}

const styles = StyleSheet.create({
  text: {
      margin: 20,
      padding: 20,
      fontSize: 36,
  }
})