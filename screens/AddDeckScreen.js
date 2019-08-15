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

import Colors from '../constants/Colors'
import BigTitle from '../components/BigTitle'

class Screen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <BigTitle>Add Deck</BigTitle>
                <TextInput style={styles.textfield} placeholder='Question' />
                <TextInput style={styles.textfield} placeholder='Answer' />
                <TouchableOpacity style={styles.button}>
                    <Text>Submit</Text>
                </TouchableOpacity>
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
    textfield: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.cardBorder,
        borderWidth: 0.5,
        borderRadius: 3,
        margin: 20,
        padding: 20,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        padding: 20,
        borderColor: Colors.cardBorder,
        borderWidth: 0.5,
        borderRadius: 3,
    }
})