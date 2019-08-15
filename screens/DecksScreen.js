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
            <ScrollView style={styles.container}>
                <BigTitle>Decks</BigTitle>
                {data.map((entry) => {
                    return (
                        <View key={entry.id} style={styles.card}>
                            <Text style={styles.cardTitle}>{entry.name}</Text>
                            <Text style={styles.cardInfo}>{entry.amountOfCards} cards</Text>
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
}

export default Screen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.cardBorder,
        borderWidth: 0.5,
        borderRadius: 3,
        margin: 20,
        padding: 20,
    },
    cardTitle: {
        fontSize: 24,
    },
    cardInfo: {
        fontSize: 18,
        color: Colors.cardSubtitle,
    }
})