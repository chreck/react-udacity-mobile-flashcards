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
import Styles from '../constants/Styles'

class DeckDetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerMode: 'float'
        }
    }
    render() {
        return (
            <ScrollView style={Styles.container}>
                <Card id='asdfasdf' text='Deck1' detail='2 cards' />
                <Button>Add Card</Button>
                <Button>Start Quiz</Button>
                <Button>Delete Deck</Button>
            </ScrollView>
        )
    }
}

export default DeckDetailScreen