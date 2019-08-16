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

import Button from '../components/Button'
import Card from '../components/Card'

class Screen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Card id='asdfasdf' name='Deck1' amountOfCards='2' />
                <Button>Add Card</Button>
                <Button>Start Quiz</Button>
                <Button>Delete Deck</Button>
            </ScrollView>
        )
    }
}

export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})