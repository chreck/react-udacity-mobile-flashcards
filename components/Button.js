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

import Colors from '../constants/Colors'

export default function Button(props) {
    const { children, onPress } = props
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={onPress}>
        <Text>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        padding: 20,
        borderColor: Colors.cardBorder,
        borderWidth: 0.5,
        borderRadius: 3,
    }
})