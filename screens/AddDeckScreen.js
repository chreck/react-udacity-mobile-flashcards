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
import Button from '../components/Button'
import TextInputField from '../components/TextInputField'

class Screen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <BigTitle>Add Deck</BigTitle>
                <TextInputField placeholder='Question' />
                <TextInputField placeholder='Answer' />
                <Button>Submit</Button>
            </ScrollView>
        )
    }
}

export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})