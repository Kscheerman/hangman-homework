export const NEW_GAME = 'NEW_GAME'
export function newGame(newGame) {
  return {
    type: 'NEW_GAME',
    payload: newGame
  }
}

export const MAKE_GUESS = 'MAKE_GUESS'
export function makeGuess(makeGuess) {
  return {
    type: 'MAKE_GUESS',
    payload: makeGuess
  }
}