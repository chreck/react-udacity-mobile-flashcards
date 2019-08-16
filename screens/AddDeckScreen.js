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
import Styles from '../constants/Styles'
import BigTitle from '../components/BigTitle'
import Button from '../components/Button'
import TextInputField from '../components/TextInputField'

class Screen extends React.Component {
    render() {
        return (
            <ScrollView style={Styles.container}>
                <BigTitle>Add Deck</BigTitle>
                <TextInputField placeholder='Deck Name' />
                <Button>Create Deck</Button>
            </ScrollView>
        )
    }
}

export default Screen