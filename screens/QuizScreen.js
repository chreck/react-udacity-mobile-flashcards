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
                <Text style={styles.paging}>1 / 2</Text>
                <Button style={styles.correctButton}>Correct</Button>
                <Button style={styles.incorrectButton}>Incorrect</Button>
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
    paging: {
        flex: 1,
        textAlign: 'center',
        marginTop: 0,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 0,
        color: Colors.pagingText,
    },
    correctButton: {
        color: 'white',
        backgroundColor: 'green',
    },
    incorrectButton: {
        color: 'white',
        backgroundColor: 'red'
    }
})