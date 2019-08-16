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
import QuestionText from '../components/QuestionText'
import Button from '../components/Button'
import Styles from '../constants/Styles'

class Screen extends React.Component {
    render() {
        return (
            <ScrollView style={Styles.container}>
                <QuestionText style={styles.text}>Does React Native work with Android?</QuestionText>
                <Button>Correct</Button>
                <Button>Incorrect</Button>
                <Button>See Answer</Button>
            </ScrollView>
        )
    }
}

export default Screen

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    },
})