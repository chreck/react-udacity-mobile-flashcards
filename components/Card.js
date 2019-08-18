import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

import Colors from '../constants/Colors'

class Card extends React.Component {
    render() {
        return (
            <View style={styles.card}>
                {this.props.children}
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
})