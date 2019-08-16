import { AsyncStorage } from 'react-native'
export const QUIZ_STORAGE_KEY = 'FlashcardTnodeCh:quiz'

function setDummyData() {
    return {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    }
}


/**
 * return all of the decks along with their titles,
 * questions, and answers. 
 */
export function getDecks() {
    return AsyncStorage.getItem(QUIZ_STORAGE_KEY)
        .then((results) =>
            (results === null
                ? setDummyData()
                : JSON.parse(results)))
}

/**
 * take in a single id argument and
 * return the deck associated with that id. 
 */
export function getDeck(title) {
    return getDecks().then((decks) => (decks[title]))
}

/**
 * take in a single title argument
 * and add it to the decks. 
 */
export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(QUIZ_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        },
    }))
}

/**
 * take in two arguments, 
 * title and card, and will add the card
 * to the list of questions for the deck
 * with the associated title. 
 */
export function addCardToDeck(title, card) {
    return getDeck(title).then((deck) => {
        console.log('addCardToDeck')
        console.log(deck)
        return AsyncStorage.mergeItem(QUIZ_STORAGE_KEY,
            JSON.stringify({
                [title]: {
                    title,
                    questions: deck.questions.concat([card])
                },
            })
        )
    })
}