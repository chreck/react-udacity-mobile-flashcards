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
import { NavigationActions } from 'react-navigation'

import { delDeck, receive } from '../utils/api'
import { removeDeck as actionDelDeck } from '../actions'

import Button from '../components/Button'
import CardText from '../components/CardText'
import Styles from '../constants/Styles'

class DeckDetailScreen extends React.Component {
    onStartCard = () => {
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
        const { title, dispatch } = this.props
        dispatch(actionDelDeck(title))
        delDeck(title)
        this.props.navigation.goBack()
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.deck !== null
    }
    render() {
        const { deck } = this.props
        const { title, questions } = deck
        const amountOfCards = questions.length
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
        deck: decks[title] ? decks[title] : null
    }
}

export default connect(mapStateToProps)(DeckDetailScreen)