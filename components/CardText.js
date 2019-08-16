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
import CardText from './CardText'

class Card extends React.Component {
    render() {
        const { id, text, detail } = this.props
        return (
            <CardText>
                <Text style={styles.text}>{text}</Text>
                {detail && <Text style={styles.detail}>{detail}</Text>}
            </CardText>
        )
    }
}

export default Card

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
    },
    detail: {
        fontSize: 18,
        color: Colors.cardSubtitle,
    }
})