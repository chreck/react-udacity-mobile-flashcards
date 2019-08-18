import React from 'react'
import {
    StyleSheet,
    Text,
} from 'react-native'

import Colors from '../constants/Colors'
import Card from './Card'

class CardText extends React.Component {
    render() {
        const { text, detail } = this.props
        return (
            <Card>
                <Text style={styles.text}>{text}</Text>
                {detail && <Text style={styles.detail}>{detail}</Text>}
            </Card>
        )
    }
}

export default CardText

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
    },
    detail: {
        fontSize: 18,
        color: Colors.cardSubtitle,
    }
})