import React from 'react'
import { Text } from 'react-native'

export default function Title(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'ben-script' }]} />
  )
}
