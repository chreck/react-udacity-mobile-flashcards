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
import { NavigationActions } from 'react-navigation'

import { addDeck } from '../utils/api'
import { addDeck as actionAddDeck } from '../actions'

import Colors from '../constants/Colors'
import Styles from '../constants/Styles'
import BigTitle from '../components/BigTitle'
import Button from '../components/Button'
import TextInputField from '../components/TextInputField'

class Screen extends React.Component {
    state = {
        name: ''
    }
    onSubmit = () => {
        this.props.dispatch(actionAddDeck(this.state.name))
        addDeck(this.state.name)
        this.toHome()
        this.setState({ name: '' })
    }
    handleNameChange = (text) => {
        this.setState({ name: text })
    }
    toHome = () => {
        const title = this.state.name
        this.props.navigation.navigate({
            routeName: 'DeckDetail',
            params: {
                title
            }
        })
    }
    render() {
        const { name } = this.state
        return (
            <ScrollView style={Styles.container}>
                <BigTitle>Add Deck</BigTitle>
                <TextInputField value={name} onChangeText={this.handleNameChange} placeholder='Deck Name' />
                <Button onPress={this.onSubmit}>Create Deck</Button>
            </ScrollView>
        )
    }
}

export default connect()(Screen)