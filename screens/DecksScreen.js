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

import { receive } from '../utils/api'
import {receiveDecks } from '../actions'
import BigTitle from '../components/BigTitle'
import CardText from '../components/CardText'
import Styles from '../constants/Styles'

class Screen extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props
        receive()
        .then((decks) => dispatch(receiveDecks(decks)))
    }
    render() {
        const { decks } = this.props
        return (
            <ScrollView style={Styles.container}>
                <BigTitle>Decks</BigTitle>
                {Object.keys(decks).map((entry) => {
                    const { title, questions } = decks[entry]
                    const amountOfCards = questions.length
                    return (
                        <CardText key={title} id={title} text={title} detail={`${amountOfCards} cards`} />
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

export default connect(mapStateToProps)(Screen)