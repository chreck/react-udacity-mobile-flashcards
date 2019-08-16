import { ADD_DECK, RECEIVE_DECKS, REMOVE_DECK, ADD_QUESTION } from '../actions/index'

export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                ...action.deck
            }
        case REMOVE_DECK:
            return Object.keys(state).filter((d) => d.title !== action.key).reduce((obj, key) => {
                obj[key] = state[key]
                return obj
            }, {})
        case ADD_QUESTION:
            return {
                ...state,
                [action.key]: {
                    ...state[action.key],
                    questions: state[action.key].questions.concat(...action.question)
                }
            }
        default:
            return state
    }
}