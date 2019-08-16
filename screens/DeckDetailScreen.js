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
import { connect } from 'react-redux'

import Button from '../components/Button'
import CardText from '../components/CardText'
import Styles from '../constants/Styles'

class DeckDetailScreen extends React.Component {
    onStartCard = () => {
        console.log('onStartCard')
        const { title } = this.props
        this.props.navigation.navigate({
            routeName: 'AddCard',
            params: {
                title,
            }
        })
    }
    onStartQuiz = () => {
        console.log('onStartQuiz')
    }
    onDeleteDeck = () => {
        console.log('onDeleteDeck')
    }
    render() {
        const { deck } = this.props
        const { title, questions } = deck
        const amountOfCards = questions.length
        console.log(deck)
        return (
            <ScrollView style={Styles.container}>
                <CardText text={title} detail={`${amountOfCards} cards`} />
                <Button onPress={this.onStartCard}>Add Card</Button>
                <Button onPress={this.onStartQuiz}>Start Quiz</Button>
                <Button onPress={this.onDeleteDeck}>Delete Deck</Button>
            </ScrollView>
        )
    }
}

function mapStateToProps(decks, { navigation }) {
    const { title } = navigation.state.params
    return {
        title,
        deck: decks[title]
    }
}

export default connect(mapStateToProps)(DeckDetailScreen)