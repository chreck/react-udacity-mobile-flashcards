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

import Colors from '../constants/Colors'

class Card extends React.Component {
    render() {
        const { id, name, amountOfCards } = this.props
        return (
            <View style={styles.card}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardInfo}>{amountOfCards} cards</Text>
            </View>
        )
    }
}

export default Card

const styles = StyleSheet.create({
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