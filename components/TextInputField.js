import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import Colors from '../constants/Colors'

export default function TextInputField(props) {
  return (
    <TextInput {...props} style={[styles.textfield, props.style]} />
  )
}

const styles = StyleSheet.create({
    textfield: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.cardBorder,
        borderWidth: 0.5,
        borderRadius: 3,
        margin: 20,
        padding: 20,
    }
})