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
import { connect } from 'react-redux'

import { setLocalNotification } from '../utils/helpers'
import { receive } from '../utils/api'
import { receiveDecks } from '../actions'
import BigTitle from '../components/BigTitle'
import CardText from '../components/CardText'
import Styles from '../constants/Styles'

class DecksScreen extends React.Component {
    state = {
        ready: false,
    }
    componentDidMount() {
        setLocalNotification({tomorrow: false})
        const { dispatch } = this.props
        receive()
            .then((decks) => dispatch(receiveDecks(decks)))
            .then(() => {
                this.setState({ ready: true })
            })
    }
    onDeckPress = (title) => {
        this.props.navigation.navigate({
            routeName: 'DeckDetail',
            params: {
                title
            }
        })
    }
    render() {
        const { decks } = this.props
        return (
            <ScrollView style={Styles.container}>
                <BigTitle>Decks</BigTitle>
                {Object.keys(decks).reverse().map((entry) => {
                    const { title, questions } = decks[entry]
                    const amountOfCards = questions.length
                    return (
                        <TouchableOpacity key={title} onPress={() => { this.onDeckPress(title) }}>
                            <CardText
                                text={title}
                                detail={`${amountOfCards} cards`}
                            />
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        )
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DecksScreen)