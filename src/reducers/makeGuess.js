import { MAKE_GUESS } from '../actions/game.js'

const initialState = {
  makeGuess: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MAKE_GUESS:
      return {
        ...state,
        makeGuess: action.payload
      }
    default:
      return state
  }
}