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
    Alert
} from 'react-native'
import { connect } from 'react-redux'

import { addQuestion } from '../utils/api'
import { addQuestion as actionAddQuestion } from '../actions'
import Colors from '../constants/Colors'
import Styles from '../constants/Styles'
import BigTitle from '../components/BigTitle'
import Button from '../components/Button'
import TextInputField from '../components/TextInputField'

class AddCardScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params
        return {
            title,
        }
    }
    state = {
        question: '',
        answer: ''
    }
    onAdd = () => {
        const { title, dispatch } = this.props
        const { question, answer } = this.state
        dispatch(actionAddQuestion(title, {question, answer}))
        addQuestion({title, question, answer})
        Alert.alert('Card added')
        this.setState({
            question: '',
            answer: ''
        })
    }
    render() {
        const { question, answer } = this.state
        return (
            <ScrollView style={Styles.container}>
                <BigTitle>Add Card</BigTitle>
                <TextInputField value={question} onChangeText={(text) => this.setState((state) => { state.question = text; return state })} placeholder='Question' />
                <TextInputField value={answer} onChangeText={(text) => this.setState((state) => { state.answer = text; return state })} placeholder='Answer' />
                <Button onPress={this.onAdd}>Add</Button>
            </ScrollView>
        )
    }
}

function mapStateToProps(decks, { navigation }) {
    const { title } = navigation.state.params
    return {
        title,
    }
}

export default connect(mapStateToProps)(AddCardScreen)