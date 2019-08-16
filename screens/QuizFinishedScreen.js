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
import BigTitle from '../components/BigTitle'
import Button from '../components/Button'
import Styles from '../constants/Styles'

class Screen extends React.Component {
    render() {
        return (
            <ScrollView style={Styles.container}>
                <BigTitle>Quiz Finished</BigTitle>
                <Text style={styles.text}>You had 66% correct of all questions.</Text>
                <Button>Run again</Button>
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