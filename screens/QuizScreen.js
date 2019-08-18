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
import { connect } from 'react-redux'

import { setLocalNotification, clearLocalNotification } from '../utils/helpers'
import Colors from '../constants/Colors'
import QuestionText from '../components/QuestionText'
import Button from '../components/Button'
import BigTitle from '../components/BigTitle'
import Styles from '../constants/Styles'

class QuizScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params
        return {
            title,
        }
    }
    state = {
        correct: 0,
        current: 1,
        showAnswer: false,
    }
    onCorrectClicked = () => {
        this.setState({
            ...this.state,
            correct: this.state.correct + 1,
            showAnswer: false,
            current: this.state.current + 1
        })
    }
    onIncorrectClicked = () => {
        this.setState({
            ...this.state,
            current: this.state.current + 1,
            showAnswer: false
        })
    }
    onFlipCardClicked = () => {
        this.setState({
            ...this.state,
            showAnswer: !this.state.showAnswer
        })
    }
    restartQuiz = () => {
        this.setState({
            correct: 0,
            incorrect: 0,
            current: 1,
            showAnswer: false,
        })
    }
    render() {
        const { deck } = this.props
        const { questions } = deck
        const amountOfCards = questions.length
        const { current, showAnswer, correct } = this.state
        const currentIndex = (current >= amountOfCards) ? amountOfCards - 1 : current - 1
        const currentQuestion = questions[currentIndex]
        const text = showAnswer ? currentQuestion.answer : currentQuestion.question
        const flipCardButtonText = showAnswer ? 'Show Question' : 'Show Answer'
        const isLastQuestion = current > amountOfCards
        if (isLastQuestion) {
            clearLocalNotification()
                .then(() => { setLocalNotification({ tomorrow: true }) })
            return (
                <ScrollView style={Styles.container}>
                    <BigTitle>Quiz Finished</BigTitle>
                    <Text style={styles.text}>You had {Math.round(correct / amountOfCards * 100)}% correct of all questions.</Text>
                    <Button onPress={this.restartQuiz}>Restart Quiz</Button>
                </ScrollView>
            )
        }
        return (
            <ScrollView style={Styles.container}>
                <QuestionText style={styles.text}>{text}</QuestionText>
                <Text style={styles.paging}>{current} / {amountOfCards}</Text>
                <Button onPress={this.onFlipCardClicked}>{flipCardButtonText}</Button>
                <Button onPress={this.onCorrectClicked} style={styles.correctButton}>Correct</Button>
                <Button onPress={this.onIncorrectClicked} style={styles.incorrectButton}>Incorrect</Button>
            </ScrollView>
        )
    }
}

function mapStateToProps(decks, { navigation }) {
    const { title } = navigation.state.params
    return {
        title,
        deck: decks[title]
    }
}

export default connect(mapStateToProps)(QuizScreen)

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    },
    paging: {
        flex: 1,
        textAlign: 'center',
        marginTop: 0,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 0,
        color: Colors.pagingText,
    },
    correctButton: {
        color: 'white',
        backgroundColor: 'green',
    },
    incorrectButton: {
        color: 'white',
        backgroundColor: 'red'
    }
})