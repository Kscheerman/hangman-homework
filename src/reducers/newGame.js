import { NEW_GAME } from '../actions/game';

const initialState = {
  newGame: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        newGame: action.payload
      }
    default:
      return state
  }
}