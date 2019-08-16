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
import Card from '../components/Card'
import Styles from '../constants/Styles'

class Screen extends React.Component {
    render() {
        const data = [
            {
                id: 'asdfasf',
                name: 'Deck1',
                amountOfCards: 2,
            },
            {
                id: 'asdfas',
                name: 'Deck2',
                amountOfCards: 1,
            },
            {
                id: '23rst',
                name: 'Deck3',
                amountOfCards: 4,
            },
            {
                id: '23r9st',
                name: 'Deck3',
                amountOfCards: 4,
            }, {
                id: '23rsst',
                name: 'Deck4',
                amountOfCards: 4,
            },
            {
                id: '23rfst',
                name: 'Deck5',
                amountOfCards: 4,
            },
            {
                id: '23r2st',
                name: 'Deck6',
                amountOfCards: 4,
            },
            {
                id: '23r5st',
                name: 'Deck7',
                amountOfCards: 4,
            },
            {
                id: '23rqst',
                name: 'Deck8',
                amountOfCards: 4,
            }
        ]
        return (
            <ScrollView style={Styles.container}>
                <BigTitle>Decks</BigTitle>
                {data.map((entry) => {
                    return (
                        <Card key={entry.id} id={entry.id} text={entry.name} detail={`${entry.amountOfCards} cards`} />
                    )
                })}
            </ScrollView>
        )
    }
}

export default Screen