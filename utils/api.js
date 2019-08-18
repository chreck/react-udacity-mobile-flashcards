import { AsyncStorage } from 'react-native'
import { getDecks, getDeck, saveDeckTitle, addCardToDeck, QUIZ_STORAGE_KEY } from './decks'

export function receive() {
    return getDecks()
}

export function get(id) {
    return getDeck(id)
}

export function addDeck(name) {
    return saveDeckTitle(name)
}

export function delDeck(key) {
    return AsyncStorage.getItem(QUIZ_STORAGE_KEY)
    .then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(data))
    })
}

export function addQuestion({title, question, answer}) {
    return addCardToDeck(title, {
        question,
        answer
    })
}