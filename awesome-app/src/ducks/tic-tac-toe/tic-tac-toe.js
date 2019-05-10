const initialState = {
    gameover: false,
    isPlayerOne: true,
    cells: Array(9).fill(null)
}

const prefix = 'tic-tac-toe/'

const Types = {
    SET_CELLS: prefix + 'SET_CELLS',
    SET_GAMEOVER: prefix + 'SET_GAMEOVER',
    TOGGLE_IS_PLAYER_ONE: prefix + 'TOGGLE_IS_PLAYER_ONE'
}

const setGameOver = () => ({
    type: Types.SET_GAMEOVER
})

const toggleIsPlayerOne = () => ({
    type: Types.TOGGLE_IS_PLAYER_ONE
})

const setCells = cells => ({
    type: Types.SET_CELLS,
    payload: { cells }
})

export const Creators = { setGameOver, toggleIsPlayerOne, setCells }

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.TOGGLE_IS_PLAYER_ONE:
            return {
                ...state,
                isPlayerOne: !state.isPlayerOne
            }
        case Types.SET_GAMEOVER:
            return { ...state, gameover: true }
        case Types.SET_CELLS:
            return {
                ...state,
                cells: action.payload.cells
            }
        default:
            return state
    }
}
